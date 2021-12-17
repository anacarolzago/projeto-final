import { Link } from 'react-router-dom'

import './menu.styles.css'

const Menu = () =>{
    return(
        <>
            <nav class="navMenu">       
                <ul class="navBar">
                    <li><Link className="link" to="/">home</Link></li>
                    <li><Link className="link" to="/beneficios">benefícios</Link></li>
                    <li><Link className="link" to="/doar">quero doação / quero doar</Link></li>
                    <li><Link className="link" to="/perguntas">perguntas frequentes</Link></li>
                </ul>       
            </nav>
        </>
    )
}

export default Menu