import { Link } from 'react-router-dom'
import './footer.styles.css'

const Footer = () => {
    return(
        <div className='rodape'>
            <footer>
                <div className='hide'></div>
                <div>
                    <h4><span>Kombucha</span>Lover's</h4>
                </div>
                <div className='links_footer'>
                    <h4>contato</h4>

                    <ul>
                        <li><Link className="link_footer" to="/">whatsapp</Link></li>
                        <li><Link className="link_footer" to="/doar">facebook</Link></li>
                        <li><Link className="link_footer" to="/doacao">e-mail</Link></li>
                    </ul> 
                </div>
                <div className='links_footer'>
                    <h4>receitas F2</h4>

                    <ul>
                        <li><Link className="link_footer" to="/">especial de festas</Link></li>
                        <li><Link className="link_footer" to="/doar">combate a dor</Link></li>
                        <li><Link className="link_footer" to="/doacao">funcional</Link></li>
                        <li><Link className="link_footer" to="/perguntas">imunidade</Link></li>
                    </ul> 
                </div>
                <div className='links_footer'>
                    <h4>links</h4>

                    <ul>
                        <li><Link className="link_footer" to="/">home</Link></li>
                        <li><Link className="link_footer" to="/doar">quero doar</Link></li>
                        <li><Link className="link_footer" to="/doacao">quero doação</Link></li>
                        <li><Link className="link_footer" to="/perguntas">FAQ's</Link></li>
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