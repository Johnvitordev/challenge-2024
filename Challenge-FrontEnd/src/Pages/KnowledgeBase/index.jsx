import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../app.css';
import BarraLateral from '../../Componentes/BarraLateral';
import NavbarCustom from '../../Componentes/NavbarCustom';
import CardCategoria from '../../Componentes/CardCategoria';
import './KnowledgeBase.css';
import CardArtigo from '../../Componentes/CardArtigo';

import Artigos from '../../dados/procedimentos.json';
import Pagination from 'react-bootstrap/Pagination';

function KnowledgeBase() {
  const [selecionado, setSelecionado] = useState(null);
  const [page, setPage] = useState(1);

  const totalArtigos = selecionado
    ? Artigos.artigos.filter((artigo) => artigo.classification === selecionado)
    : Artigos.artigos;

  const itemsPerPage = 6;
  const lastItemIndex = page * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  // Calcular o número total de páginas
  const totalPages = Math.ceil(totalArtigos.length / itemsPerPage);

  const handleSelection = (categoria) => {
    selecionado === categoria ? setSelecionado(null) : setSelecionado(categoria);
    setPage(1);  // Resetar para a primeira página quando a categoria muda
  };

  const handlePageClick = (number) => {
    setPage(number);
  };

  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item key={number} active={number === page} onClick={() => handlePageClick(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div className='container-page'>
      <BarraLateral />
      <div className='main-content'>
        <NavbarCustom />
        <div className='categorias'>
          <h2>Categorias</h2>
          <div className='caixacategoria'>
            <CardCategoria
              onClick={() => handleSelection('Acesso SISTEMA Y')}
              Titulo={'Acesso SISTEMA Y'}
              linksimbolo={'/Y.png'}
              theme={selecionado === 'Acesso SISTEMA Y' ? 'dark' : ''}
            />
            <CardCategoria
              onClick={() => handleSelection('Acesso sistema SAP')}
              Titulo={'Acesso sistema SAP'}
              linksimbolo={'/sap.png'}
              theme={selecionado === 'Acesso sistema SAP' ? 'dark' : ''}
            />
            <CardCategoria
              onClick={() => handleSelection('Gestão de Usuarios')}
              Titulo={'Gestão de Usuarios'}
              linksimbolo={'/usuarios.jpg'}
              theme={selecionado === 'Gestão de Usuarios' ? 'dark' : ''}
            />
            <CardCategoria
              onClick={() => handleSelection('Configuração')}
              Titulo={'Configuração'}
              linksimbolo={'/engrenagem.jpg'}
              theme={selecionado === 'Configuração' ? 'dark' : ''}
            />
          </div>
        </div>
        <div className='artigos'>
          <h2>Lista de Artigos</h2>
          <div className='caixaartigos'>
            {totalArtigos.slice(firstItemIndex, lastItemIndex).map((artigo) => (
              <CardArtigo
                key={artigo.id}
                Titulo={`${artigo.id} - ${artigo.titulo}`}
                Descricao={artigo.summary}
                link={`/Softtek/${artigo.id} - ${artigo.titulo}.docx`}
              />
            ))}
          </div>
          <div className='paginas'>
            <Pagination size="sm">{paginationItems}</Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KnowledgeBase;
