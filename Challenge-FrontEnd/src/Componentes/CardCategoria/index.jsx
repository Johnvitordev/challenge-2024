import './CardCategoria.css';

function CardCategoria({ Titulo, linksimbolo, theme, onClick }) {
    return (
        <button 
            className={`card ${theme === 'dark' ? 'escuro' : ''}`} 
            onClick={onClick} 
        >
            <div className='simbolo'><img src={linksimbolo} alt='' /></div>
            <p>{Titulo}</p>
        </button>
    );
}

export default CardCategoria;
