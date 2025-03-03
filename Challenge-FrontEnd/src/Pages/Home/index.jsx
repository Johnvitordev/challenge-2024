
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../app.css';
import BarraLateral from '../../Componentes/BarraLateral';
import NavbarCustom from '../../Componentes/NavbarCustom';
import StatusCArd from '../../Componentes/StatusCard'
import './home.css'
import FilterComponent from '../../Componentes/FIlterComponent';
import TicketTable from '../../Componentes/TicketTable';

function Home() {


  return (
    <div className='container-page'>
      
      <BarraLateral/>
      <div className='main-content'>
      <NavbarCustom/>
      <div className='infoarea'>

        <div className='filter'>
          <FilterComponent/>
        </div>
        <div className='graficos'>
          <StatusCArd titulo={'Tickets Abertos'} number={45} iconUrl={'/ticket.png'} percentage={45} unidade={'%'} theme = 'dark'></StatusCArd>
          <StatusCArd titulo={'Em Execução'} number={157} iconUrl={'/relogio.jpg'} percentage={45} unidade={''} theme = ''></StatusCArd>
          <StatusCArd titulo={'Resolvidos'} number={9} iconUrl={'/ok.jpg'} percentage={9} unidade={''} theme = ''></StatusCArd>
          <img className='imagem' src='/grafico.png'/>
        </div>

        <div className='tabela'> 
          <TicketTable />
        </div>
      </div>
      </div>

    </div>
  )
}

export default Home
