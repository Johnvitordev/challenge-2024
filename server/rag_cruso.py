import json
from langchain.schema import Document

import os
import json
import openai
from openai import OpenAI

from langchain.llms import OpenAI
from langchain.retrievers.self_query.base import SelfQueryRetriever
from langchain.chains.query_constructor.base import AttributeInfo
from langchain.schema import Document
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import Chroma


# Ignorar verificação SSL
ssl._create_default_https_context = ssl._create_unverified_context

embeddings = OpenAIEmbeddings()

from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv()) # read local .env file
openai.api_key = os.environ['OPENAI_API_KEY']

openai_client = OpenAI()
from pypdf import PdfReader

# Função para carregar o JSON e convertê-lo para objetos Document do LangChain
def load_json_as_documents(json_file_path):
    with open(json_file_path, "r", encoding="utf-8") as json_file:
        data = json.load(json_file)
    
    # Convertendo cada dicionário em uma instância de Document do LangChain
    documents = [Document(page_content=item["page_content"], metadata=item["metadata"]) for item in data]
    return documents

# Exemplo de uso
json_file_path = "docs_data.json"
docs_list = load_json_as_documents(json_file_path)


# Exibir os documentos no formato correto
docus = docs_list


docs_list
vectorstore = Chroma.from_documents(docus, embeddings)


metadata_field_info = [
    AttributeInfo(
        name="nome",
        description="o nome da instrução de trabalho",
        type="string",
    ),
    AttributeInfo(
        name="Sistema",
        description="Qual o sistema a qual instrução de trabalho se aplica",
        type="string or list[string]",
    )
]
document_content = "Instrução de trabalho completa para executar a tarefa"

llm = OpenAI(temperature=0)

retriever = SelfQueryRetriever.from_llm(
    llm,
    vectorstore,
    document_content,
    metadata_field_info,
    verbose=True,
    enable_limit=True,
)


import os
import openai
from openai import OpenAI

from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv()) # read local .env file
openai.api_key = os.environ['OPENAI_API_KEY']

openai_client = OpenAI()


query = "Como ativar conta de usuario no SAP"

def rag(query, model="gpt-4o-mini"):
    

    retrieved_documents = retriever.get_relevant_documents(query)
    information = "\n\n".join([doc.page_content for doc in retrieved_documents])

    messages = [
        {
            "role": "system",
            "content": "Voce é um assistente de suporte tecnico de TI e responde de forma clara e objetiva(toda a respostas esta dentro de uma tag DIV pois sera inserida no codigo de uma pagina web) com todas as tags apropriadas e pronto para ser adicionado em um site.\n\nexemplo:\n\n<ul>\n<li> Primeiro..."
            "Vou te mostrar a pergunta do usuario, e as informações importantes dos procedimentos da empresa que tratam do tema. responda as perguntas usando apenas essas informações."
        },
        {"role": "user", "content": f"Question: {query}. \n Information: {information}"}
    ]
    
    response = openai_client.chat.completions.create(
        model=model,
        messages=messages,
    )
    content = response.choices[0].message.content
    return content

