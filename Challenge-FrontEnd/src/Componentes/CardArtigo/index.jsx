import { Button } from 'react-bootstrap'
import './CardArtigo.css'

function CardArtigo({ Titulo, Descricao, link }) {


    return (
        <div className='cartaoartigo'>
            <p className='nomeartigo'>{Titulo}</p>
            <p className='resumo'>{Descricao}</p>
            <a href={link} download>
                <Button size="sm" className='baixar'>Baixar</Button>
            </a>
        </div>
    )
}

export default CardArtigo