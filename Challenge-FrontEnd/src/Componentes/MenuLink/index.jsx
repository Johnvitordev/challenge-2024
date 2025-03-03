import { Link, useLocation } from 'react-router-dom'
import './MenuLink.css'


function MenuLink({children, to}){
    const localizacao = useLocation();
    return(
        <Link className = {`
            nav-link
            ${localizacao.pathname === to ? 'active' : 'link-dark'}
        `} to={to}>
            {children}
        </Link>
    )
}

export default MenuLink