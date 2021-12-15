import { Link } from 'react-router-dom'
import './menu.styles.css'

const Menu = () =>{
    return(
        <>
            <nav class="navMenu">
                <h1><span>Kombucha</span> Lover's </h1>         
            
                <ul class="navBar">
                    <li><Link className="link" to="/">home</Link></li>
                    <li><Link className="link" to="/doar">quero doar</Link></li>
                    <li><Link className="link" to="/doacao">quero doação</Link></li>
                    <li><Link className="link" to="/perguntas">perguntas frequentes</Link></li>
                </ul>       
            </nav>
        </>
    )
}

export default Menu