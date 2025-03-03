# Assistente de Suporte Técnico com IA - Projeto Softtek Challenge

## Descrição do Projeto

Este projeto foi desenvolvido como resposta ao **Desafio 1 do Challenge da Softtek**. Ele consiste em um **Assistente de Suporte Técnico** automatizado, que utiliza **Inteligência Artificial Generativa** alimentada pela **API da OpenAI** e uma arquitetura **RAG (Retrieval-Augmented Generation)** para fornecer respostas contextuais e assertivas aos chamados técnicos.

O sistema é dividido em um backend, desenvolvido em **Flask** (Python), e um frontend em **React** usando **Vite** e **React-Bootstrap**. A base de conhecimento é composta por arquivos PDF, que foram convertidos em JSON para melhor utilização de metadados, o que melhora a assertividade nas respostas da IA.

## Funcionalidades

- **Assistente de Suporte**: Automatiza o processo de resposta de chamados técnicos, gerando respostas contextuais com base em documentos da base de conhecimento.
- **RAG (Retrieval-Augmented Generation)**: Combina a recuperação de informações relevantes e geração de linguagem natural para fornecer respostas precisas.
- **Frontend em React**: Interface de usuário construída com **React** e **React-Bootstrap**.
- **Backend em Flask**: Backend que se comunica com a **API da OpenAI** para processar as consultas e gerar respostas.
- **Base de Conhecimento com Metadados**: Os arquivos PDF foram transformados em JSON, permitindo o uso de metadados como "nome" e "sistema" para refinar a recuperação de documentos.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes softwares instalados em sua máquina:

- **Python 3.8+**
- **Node.js** (versão 14.x ou superior)
- **npm** (incluído com o Node.js) ou **yarn**
- **pip** (gerenciador de pacotes Python)

## Instalação

### Backend

1. Clone o repositório para sua máquina local:

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Entre no diretório do projeto backend:

    ```bash
    cd server
    ```

3. Crie e ative um ambiente virtual (recomendado):

    ```bash
    python -m venv venv
    source venv/bin/activate  # No Windows, use venv\Scripts\activate
    ```

4. Instale todas as dependências necessárias listadas no `requirements.txt`:

    ```bash
    pip install -r requirements.txt
    ```

5. Defina as variáveis de ambiente no arquivo `.env`. Certifique-se de incluir sua chave da **API da OpenAI**:

    ```bash
    OPENAI_API_KEY=your_openai_api_key
    ```

6. Execute o servidor Flask:

    ```bash
    python main.py
    ```

### Frontend

1. Entre no diretório do frontend:

    ```bash
    cd Challenge-2-Entrega-main
    ```

2. Instale as dependências do frontend:

    ```bash
    npm install
    ```

3. Execute o projeto frontend:

    ```bash
    npm run dev
    ```

## Estrutura do Projeto

- **/server**: Contém o código backend em Flask.
- **/client**: Contém o código frontend em React.

### Principais Componentes

1. **Sobre o Projeto**: Página com informações sobre a equipe e tecnologias usadas.
2. **Knowledge Base**: Repositório de conhecimento da empresa.
3. **Tickets**: Área onde os analistas podem interagir com a IA para resolução de chamados.
4. **Home**: Um resumo geral dos tickets.
5. **Tela de Login**: Tela de autenticação para acesso ao sistema.

## Base de Conhecimento e Metadados

A base de conhecimento utilizada são arquivos PDF convertidos para JSON, o que permite a extração e uso de **metadados** como o "nome" da instrução de trabalho e o "sistema" ao qual ela se aplica. Isso melhora a recuperação de informações e aumenta a assertividade das respostas geradas pela IA.

## Tecnologias Utilizadas

- **React** (Frontend)
- **Vite** (Bundler)
- **React-Bootstrap** (UI Components)
- **Flask** (Backend)
- **OpenAI GPT-4** (IA Generativa)
- **RAG** (Retrieval-Augmented Generation)
- **Chroma** (Vector Store)
- **Python** e **Node.js**

## Próximos Passos

- **Teste do modelo em produção**: Realizar testes de desempenho em produção para validar a eficiência e precisão do assistente.
- **Integração com o sistema da Softtek**: Incluir funcionalidades de login robustas e o armazenamento das conversas entre analistas e IA.
- **Treinamento contínuo do modelo**: Utilizar novos dados para melhorar a precisão das respostas.

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Abra uma issue ou envie um pull request para sugerir melhorias ou corrigir bugs.

## Licença

Este projeto está sob a licença [sua licença].

