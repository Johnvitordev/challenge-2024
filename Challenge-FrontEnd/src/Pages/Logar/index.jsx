import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import BarraLateral from "../../Componentes/BarraLateral";
import NavbarCustom from "../../Componentes/NavbarCustom";
import "./Logar.css";

import LoginForm from "../../Componentes/LoginForm";
import LoginAzul from "../../Componentes/LoginAzul";

function Logar() {
  return (
    <div className="telaLogin">
      <div className="ladoAzul">
        <LoginAzul />
      </div>
      <div className="ladoBranco">
        <LoginForm />
      </div>
    </div>
  );
}

export default Logar;
