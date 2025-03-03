import React, { useState, useEffect } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './NavbarCustom.css';
import { Link, useLocation } from 'react-router-dom';

function NavbarCustom() {
    const localizacao = useLocation();
    const [tituloPagina, setTituloPagina] = useState('');

    useEffect(() => {
        switch (localizacao.pathname) {
            case '/Home':
                setTituloPagina('Home');
                break;
            case '/Tickets':
                setTituloPagina('Tickets');
                break;
            case '/KnowledgeBase':
                setTituloPagina('Knowledge Base');
                break;
            default:
                setTituloPagina('Sobre o Projeto');
                break;
        }
    }, [localizacao]);

    return (
        <div className="navbar-custom">
            <h1 className="navbar-title">{tituloPagina}</h1>
            <div className="navbar-search">
                <Form className="search-form">
                    <FormControl type="text" placeholder="Procure" className="search-input" />
                </Form>
                <i className="bi bi-search"></i>
                <i className="bi bi-bell"></i>
            </div>
            <Link to="/Logar" className="botaoLogin">
                <i className="bi bi-person-circle espaco"></i>
                <span>Login</span>
            </Link>
        </div>
    );
}

export default NavbarCustom;
