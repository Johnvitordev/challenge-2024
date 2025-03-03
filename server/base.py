import os
import json
import ssl
from dotenv import load_dotenv
import openai
from langchain.schema import Document
from langchain_openai.embeddings import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_community.chat_models import ChatOpenAI
from langchain.retrievers.self_query.base import SelfQueryRetriever
from langchain.chains.query_constructor.base import AttributeInfo
from langchain.text_splitter import RecursiveCharacterTextSplitter


# Load environment variables
from dotenv import load_dotenv
load_dotenv()
openai_api_key = os.environ['OPENAI_API_KEY']
openai.api_key = openai_api_key


# Initialize SSL context
ssl._create_default_https_context = ssl._create_unverified_context

# Initialize OpenAI embeddings and LLM
embeddings = OpenAIEmbeddings()
llm = ChatOpenAI(
    openai_api_key=openai_api_key,
    model_name='gpt-4o-mini',
    temperature=0
)

# Function to load documents from JSON
def load_json_as_documents(json_file_path):
    with open(json_file_path, "r", encoding="utf-8") as json_file:
        data = json.load(json_file)
    documents = [Document(page_content=item["page_content"], metadata=item["metadata"]) for item in data]
    return documents

# Load documents
json_file_path = "docs_data.json"
docs_list = load_json_as_documents(json_file_path)

# Split documents for better chunking
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
splits = text_splitter.split_documents(docs_list)
embeddings = OpenAIEmbeddings(openai_api_key=openai_api_key)


# Initialize vector store
vectorstore = Chroma.from_documents(splits, embeddings)

# Define metadata fields for SelfQueryRetriever
metadata_field_info = [
    AttributeInfo(
        name="nome",
        description="O nome da instrução de trabalho",
        type="string",
    ),
    AttributeInfo(
        name="Sistema",
        description="Qual o sistema ao qual a instrução de trabalho se aplica",
        type="string or list[string]",
    ),
]

document_content_description = "Instrução de trabalho completa para executar a tarefa"

# Initialize SelfQueryRetriever
retriever = SelfQueryRetriever.from_llm(
    llm=llm,
    vectorstore=vectorstore,
    document_contents=document_content_description,
    metadata_field_info=metadata_field_info,
    verbose=True,
    enable_limit=True,
)

# Function to answer questions using RAG
def ask_question(query):
    retrieved_documents = retriever.get_relevant_documents(query)
    information = "\n\n".join([doc.page_content for doc in retrieved_documents])

    prompt = f"""
Você é um assistente de suporte técnico de TI que responde de forma clara e objetiva.
Sua resposta deve estar dentro de uma tag <div> para ser inserida em uma página web, com todas as tags HTML apropriadas.

Pergunta: {query}

Informação: {information}

Responda à pergunta acima usando apenas as informações fornecidas.
"""

    response = llm.predict(prompt)
    return response

