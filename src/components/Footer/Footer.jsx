import { Link } from 'react-router-dom'
import './footer.styles.css'

const Footer = () => {
    return(
        <div className='rodape'>
            <footer>
                <div className='hide'></div>
                <div>
                    <h3><span>Kombucha</span>Lover's</h3>
                </div>

                <div className='links_footer'>
                    <h4>links</h4>
                    <ul>
                        <li><Link className="link_footer" to="/">home</Link></li>
                        <li><Link className="link_footer" to="/beneficios">benefícios</Link></li>
                        <li><Link className="link_footer" to="/doar">quero doação / quero doar</Link></li>
                        <li><Link className="link_footer" to="/perguntas">perguntas frequentes</Link></li>
                    </ul>
                </div>

                <div className='links_footer'>
                    <h4>contato</h4>
                    <ul>
                        <li><Link className="link_footer" to="/">home</Link></li>
                        <li><Link className="link_footer" to="/beneficios">benefícios</Link></li>
                        <li><Link className="link_footer" to="/doar">quero doação / quero doar</Link></li>
                        <li><Link className="link_footer" to="/perguntas">perguntas frequentes</Link></li>
                    </ul>
                </div>

                <div className='hide'></div>
            </footer>

            <div className='rodape_p'>
                <p>Projeto realizado pela aluna Ana Carolina Zago - Reprograma &copy; 2021</p>
            </div>
        </div>
    )
}

export default Footer