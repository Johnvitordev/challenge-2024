
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SobreProjeto from './Pages/SobreProjeto';
import Home from './Pages/Home';
import KnowledgeBase from './Pages/KnowledgeBase';
import Tickets from './Pages/Tickets';
import Logar from './Pages/Logar';

function App() {


  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<SobreProjeto/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/KnowledgeBase' element={<KnowledgeBase/>}/>
        <Route path='/Tickets' element={<Tickets/>}/>
        <Route path='/Logar' element={<Logar/>}/>
      
      </Routes>  
    
    </BrowserRouter>
  )
}

export default App
