from flask import Flask, request, jsonify
from flask_cors import CORS
from base import ask_question

app = Flask(__name__)
CORS(app)


@app.route("/chat", methods=['POST'])
def chat():
    data = request.get_json()
    question = data.get("msg")

    if not question:
        return jsonify({"error": "Nenhuma pergunta foi fornecida"}), 400

    try:
        response = ask_question(question)
        return jsonify({"response": response})
    except Exception as e:
        print("Ocorreu um erro ao obter os documentos relevantes:")
        import traceback
        traceback.print_exc()
        # Opcionalmente, você pode retornar uma mensagem de erro personalizada
        # ou simplesmente deixar o Flask retornar o erro 500
        raise e

if __name__ == "__main__":
    app.run(debug=True)
