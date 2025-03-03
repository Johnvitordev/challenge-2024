import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { GoogleGenerativeAI } from "@google/generative-ai";

import solucao1 from '../../dados/solucao1.json';

import "./style.css";

function TicketsInfo() {
  const [messages, setMessages] = useState([
    {
      user: "bot",
      text: solucao1.solucao,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const apiKey = "AIzaSyBxsQ9XPzTqd-NmLZdhoDYv_VVMKrNgxqY";
  const genAI = new GoogleGenerativeAI(apiKey);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction:
          "Responda a pergunta de maneira clara e direta. A resposta vai ser renderizada em um site então forneça a resposta em formato HTML.",
      });

      const chatSession = model.startChat({
        generationConfig: {
          temperature: 1,
          topP: 0.95,
          topK: 64,
          maxOutputTokens: 8192,
          responseMimeType: "text/plain",
        },
        history: [
          {
            role: "user",
            parts: [
              {
                text: input,
              },
            ],
          },
        ],
      });

      const botResponse = await chatSession.sendMessage(input);
      console.log(botResponse);

      const botMessage = { user: "bot", text: botResponse.response.text() };
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
    <div className="tickets-container">
      <h3>Informações dos Tickets</h3>
      <div className="table table-container">
        <Table responsive>
          <thead>
            <tr>
              <th></th>{/* {coluna para as checkboxes} */}
              <th scope="col">Tickets</th>
              <th scope="col">Prioridade</th>
              <th scope="col">Status</th>
              <th scope="col">Descrição</th>
              <th scope="col">Solução</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Check type="checkbox" name="ticketSelect" />
              </td>
              <td>343230</td>
              <td>Alta</td>
              <td>Ativo</td>
              <td>O usuario precisa desbloquear o usuario dele no sistema SAP</td>
              <td>
                <a href="#" className="anexo-icon" onClick={handleShow}><i className="bi bi bi-robot"></i></a>
              </td>
            </tr>
            <tr>
                <td>
                    <Form.Check type="checkbox" name="ticketSelect" />
                </td>
              <td>343234</td>
              <td>Alta</td>
              <td>Ativo</td>
              <td>O usuario não consegue realizar o login no sistema Y</td>
              <td>
                <a href="#" className="anexo-icon" onClick={handleShow}><i className="bi bi bi-robot"></i></a>
              </td>
            </tr>
            
            <tr>
                <td>
                    <Form.Check type="checkbox" name="ticketSelect" />
                </td>
              <td>343234</td>
              <td>Alta</td>
              <td>Ativo</td>
              <td>Erro na pagina de Configuração</td>
              <td>
                <a href="#" className="anexo-icon" onClick={handleShow}><i className="bi bi bi-robot"></i></a>
              </td>
            </tr>
            
            <tr>
                <td>
                    <Form.Check type="checkbox" name="ticketSelect" />
                </td>
              <td>343234</td>
              <td>Media</td>
              <td>Ativo</td>
              <td>Organização de Gestão de Usuários</td>
              <td>
                <a href="#" className="anexo-icon" onClick={handleShow}><i className="bi bi bi-robot"></i></a>
              </td>
            </tr>
            
          </tbody>
        </Table>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalhes da Solução</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalgpt">
          <div className="chat-content">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.user}`}>
                <strong>{msg.user === "bot" ? "Bot" : "Você"}:</strong> <span dangerouslySetInnerHTML={{ __html: msg.text }} />
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="comment-input">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Digite sua pergunta..."
              disabled={loading}
            />
            <button className="btn btn-primary" onClick={sendMessage} disabled={loading}>
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TicketsInfo;
