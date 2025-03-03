import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../app.css';
import BarraLateral from '../../Componentes/BarraLateral';
import NavbarCustom from '../../Componentes/NavbarCustom';
import DetalhesProjeto from '../../Componentes/DetalhesProjeto'
import Overview from "../../Componentes/Overview"

function SobreProjeto() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`container-page ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <BarraLateral isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className='main-content'>
        <NavbarCustom toggleSidebar={toggleSidebar} />
        <Overview />
        <DetalhesProjeto />
      </div>
    </div>
  )
}

export default SobreProjeto