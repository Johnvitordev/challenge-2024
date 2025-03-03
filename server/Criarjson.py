import os
import json
import openai
from openai import OpenAI

from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv()) # read local .env file
openai.api_key = os.environ['OPENAI_API_KEY']

openai_client = OpenAI()
from pypdf import PdfReader


# Função para extrair texto do PDF
def extract_text_from_pdf(pdf_path):
    reader = PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text()
    return text

# Função para gerar keywords usando OpenAI GPT-4 ou GPT-3.5
def generate_keywords(text, model="gpt-4o-mini"):
    messages = [
        {
            "role": "system",
            "content": "Você é um assistente especializado em extrair keywords de textos extensos. "
                       "Forneça uma lista de palavras-chave relevantes extraídas do texto fornecido. "
                       "As keywords devem ser relacionadas ao tema central do texto e capturar os tópicos mais importantes."
                       "Separe as palavras-chave por vírgulas e evite incluir sentenças completas."
                       "Fornça no máximo 3 keywords e elas devem ser as mais importantes para saber do que se trata o documento (sitema abordado, tipo de serviço feito e etc.)"
        },
        {"role": "user", "content": text}
    ]
    
    response = openai_client.chat.completions.create(
        model=model,
        messages=messages,
    )
    keywords = response.choices[0].message.content
    keywords = keywords.split(',')
    return keywords


# Caminho para a pasta contendo os PDFs
pdf_folder_path = "docs/"

# Lista para armazenar os objetos Document
docs = []

# Iterar sobre os arquivos na pasta 'docs'
for pdf_file in os.listdir(pdf_folder_path):
    if pdf_file.endswith(".pdf"):
        pdf_path = os.path.join(pdf_folder_path, pdf_file)
        
        # Extrair o texto do PDF (defina a função extract_text_from_pdf)
        page_content = extract_text_from_pdf(pdf_path)
        
        # Gerar keywords usando a API do OpenAI (defina a função generate_keywords)
        keywords = generate_keywords(page_content)
        
        # Criar uma instância do Document
        document = Document(
            page_content=page_content,
            metadata={
                "nome": pdf_file,
                "keywords": keywords
            }
        )
        
        # Adicionar à lista de documentos
        docs.append(document)

# Salvar os dados em um arquivo JSON, convertendo os objetos Document em dicionários
with open("docs_data.json", "w", encoding="utf-8") as json_file:
    json.dump(docs, json_file, ensure_ascii=False, indent=4, default=custom_serializer)

print("Processamento concluído. Os dados foram salvos em 'docs_data.json'.")

print("Processamento concluído. Os dados foram salvos em 'docs_data.json'.")
