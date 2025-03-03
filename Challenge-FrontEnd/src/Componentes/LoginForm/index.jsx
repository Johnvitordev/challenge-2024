import React from "react";
import { useState } from "react";

import { Form, Button } from "react-bootstrap";
import "./style.css";

import roboLoginVideo from "../../assets/video/robo_login.mp4";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubimit = (event) => {
    event.preventDefault();

  };

  return (
    <div className="login-container">
      
    
      <div className="input-container">
        <video
        src={roboLoginVideo}
        alt="Robo Gif"
        className="video-background"
        autoPlay
        loop
        muted
        />
        <Form onSubmit={handleSubimit}>
          <h2 className="titulo">Seja Bem-vindo!</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              className="input-field"
              type="email"
              placeholder="  Email Address"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              className="input-field"
              type="password"
              placeholder="  Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="recall-forget">
            <a href="#">Esqueceu a senha?</a>
          </div>
          <Button className="btn-login" variant="primary" type="submit" block href="/Home">
            Login
          </Button>
        </Form>
        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Entre em contato com o seu gestor</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
