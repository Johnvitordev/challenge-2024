import './Integrantes.css';

function Integrantes({ nome, fotoLink, children }) {

    return (
        <div className='cardIntegrante'>
            <div className='cardInterno'>
                <img className='mask1' src= {fotoLink} alt={nome} />
            </div>
            <div className='textoIntegrante'>
                <h3>{nome}</h3>
                <p>{children}</p>
            </div>
        </div>
    );
}

export default Integrantes;
