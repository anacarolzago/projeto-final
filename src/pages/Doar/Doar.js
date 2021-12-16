import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

import './doar.styles.css'

const Doar = () => {
    return (
        <>
            <Menu />
            <Header title='Kombucha' />
            <Main> 
                <div className='container'>
                    <div className='row'>
                        <div className='col'>1</div>
                        <div className='col'>
                            <form>
                                <fieldset className='grupo'>
                                    <div className='campo'>
                                        <label for="nome"><strong>Nome</strong></label>
                                        <input type="text" nome="nome" id="nome" required></input>
                                    </div>

                                    <div className='campo'>
                                        <label for="sobrenome"><strong>Sobrenome</strong></label>
                                        <input type="text" nome="sobrenome" id="sobrenome" required></input>
                                    </div>
                                </fieldset>

                                <div className='campo'>
                                    <label for="email"><strong>Email</strong></label>
                                    <input type="email" nome="email" id="email" required></input>
                                </div>

                                <div className='campo'>
                                    <label><strong>Selecione o Estado</strong></label>
                                    <select id="estado">
                                        <option selected disabled value="">Selecione</option>
                                        <option>AC</option>
                                        <option>AL</option>
                                        <option>AP</option>
                                        <option>AM</option>
                                        <option>BA</option>
                                        <option>CE</option>
                                        <option>ES</option>
                                        <option>GO</option>
                                        <option>MA</option>
                                        <option>MT</option>
                                        <option>MS</option>
                                        <option>MG</option>
                                        <option>PA</option>
                                        <option>PB</option>
                                        <option>PR</option>
                                        <option>PE</option>
                                        <option>PI</option>
                                        <option>RJ</option>
                                        <option>RN</option>
                                        <option>RS</option>
                                        <option>RO</option>
                                        <option>RR</option>
                                        <option>SC</option>
                                        <option>SP</option>
                                        <option>SE</option>
                                        <option>TO</option>
                                        <option>DF</option>
                                    </select>
                                </div>

                                <div className='campo'>
                                    <label><strong>Selecione a cidade</strong></label>
                                </div>

                                <div className='campo'>
                                    <br> </br>
                                    <label><strong>Fale conosco</strong></label>
                                    <textarea row="6" style="width: 26em" id="experiencia" nome="experiencia"></textarea>
                                </div>

                                <button type="submit">Concluido</button>
                            </form>

                        </div>
                        <div className='col'>3</div>
                    </div>
                </div>
            </Main>
            <Footer />
        </>  
    )
}

export default Doar