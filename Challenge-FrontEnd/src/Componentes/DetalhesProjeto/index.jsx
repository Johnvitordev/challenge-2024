import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DetalhesProjeto.css'
import Integrantes from '../Integrantes';

function DetalhesProjeto() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Container className={`detalhes-projeto ${isSmallScreen ? 'small-screen' : ''}`}>
            <h2 className='titulo'>Detalhes</h2>
            <div className='blocodetalhes'>
                <div className='quadradotexto'>
                    <h3>Problema</h3>
                    <p>
                        Desafio 1 do Challenge 2024 da Softtek envolve criar um Assistente de Suporte Técnico com IA para melhorar a assertividade e agilidade no atendimento de chamados no Service Desk e AMS.
                    </p>
                </div>
                <div className='quadradotexto'>
                    <h3>Solução:</h3>
                    <p>
                        Desenvolvemos uma aplicação web integrando React no frontend com a API de IA Generativa da OpenAI no backend, aprimorando as capacidades de resposta automática e análise de chamados.
                    </p>
                </div>
                <div className='quadradotexto'>
                    <h3>Tecnologias empregadas:</h3>
                    <p>UI Interativa: Construção de interfaces dinâmicas usando React.</p>
                    <p>Componentes Reutilizáveis: Utilização de componentes para formulários, visualização de chamados e interações.</p>
                    <p>Roteamento Eficiente: Uso do React Router para uma navegação fluida entre páginas.</p>
                </div>
                <div className='quadradotexto'>
                    <h3>Backend Python:(Next)</h3>
                    <p>Geração de Respostas com IA: Acesso aos modelos avançados da OpenAI para análise e resposta a chamados.</p>
                    <p>Processamento de Linguagem Natural: Utilização de NLP para entender e responder consultas baseadas em texto.</p>
                    <p>Integração de API: Criação de endpoints que conectam o frontend ao poder computacional da OpenAI.</p>
                </div>
            </div>

            <h2 className='titulo'>Membros da Equipe</h2>
            <div className='blocoMembros'>
                <Integrantes nome={'Geraldo Neves'} fotoLink={'https://github.com/Geraldnvs.png'}>
                    Responsável pelo design, estruturação do projeto e desenvolvimento do front-end, garantindo uma experiência de usuário intuitiva e eficaz.
                </Integrantes>
                <Integrantes nome={'João Oliveira'} fotoLink={'https://github.com/Johnvitordev.png'}>
                    Especialista em front-end, focado na implementação das interfaces do usuário e otimização da performance visual.
                </Integrantes>
                <Integrantes nome={'Mariana Leite'} fotoLink={'/Mariana.jpg'}>
                    Responsável pela produção e edição do Vídeo Pitch 2, contribuindo para a comunicação clara e persuasiva do projeto.
                </Integrantes>
                <Integrantes nome={'Mere Angela'} fotoLink={'https://github.com/Mereangela.png'}>
                    Responsável pela produção e edição do Vídeo Pitch 2, contribuindo para a comunicação clara e persuasiva do projeto.
                </Integrantes>
            </div>
        </Container>
    )
}

export default DetalhesProjeto
