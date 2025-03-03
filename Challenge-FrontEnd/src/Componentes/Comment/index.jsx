import React, { useState } from "react";
import "./style.css";
import ImageSrc from "../../assets/images/image.jpg";

const Comment = () => {
  const [messages, setMessages] = useState([
    {
      user: "bot",
      text: "Olá, como posso te ajudar hoje?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { user: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Fazendo uma requisição POST ao servidor Flask
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ msg: input }), // Enviar a pergunta do usuário para o Flask
      });

      if (!response.ok) {
        throw new Error("Erro ao obter resposta do servidor.");
      }

      const data = await response.json();
      const botMessage = { user: "bot", text: data.response }; // Espera que a resposta do Flask tenha um campo `response`
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("An error occurred:", error);
      const botMessage = { user: "bot", text: "Desculpe, houve um erro ao processar sua solicitação." };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="solution-container">
      <div className="ai-solutions">
        <h4>Theo</h4>
        <img src={ImageSrc} alt="" className="avatar-ai" />
        <h3>Soluções Geradas por AI</h3>
        <p>Com o Theo a tecnologia se torna mais humana</p>
      </div>

      {/* Seção de Chatbot */}
      <div className="comment-section">
        <h4>ChatBot</h4>
        <div className="comments">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`comment ${msg.user === "bot" ? "bot" : "user-message"}`}
            >
              <img
                src={
                  msg.user === "bot"
                    ? ImageSrc
                    : "https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg"
                }
                alt="foto de perfil"
                className="avatar"
              />
              <div
                className="comment-text"
                dangerouslySetInnerHTML={msg.user === "bot" ? { __html: msg.text } : { __html: `<p>${msg.text}</p>` }}
              />
            </div>
          ))}
        </div>
        <div className="comment-input">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            placeholder="Digite sua pergunta..."
            disabled={loading}
          />
          <button className="btn btn-primary" onClick={sendMessage} disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Comment;
