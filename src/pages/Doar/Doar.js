import { useState } from 'react'

import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

import './doar.styles.css'

const Doar = () => {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [estado, setEstado] = useState("")

    return (
        <>
            <Menu />
            <Header title='Kombucha' />
            <Main> 
                <div className='container'>
                    <h1>Cadastro de doares e adotantes</h1>

                    <p>Pra você que já é kombucheira e têm scobys filhos precisando de um novo lar, e pra você que quer fazer suas próprias kombuchas em casa e testar vários sabores mas ainda não tem o scoby e o chá de arranque, preencha nosso fomulário que vamos ver se dá macth!</p>

                    <p>Como funciona:</p>
                    <p>Através do cadastro abaixo, voluntários doadores e pessoas que querem receber doação, colocam seus dados, bem como a cidade, e o nosso sistema vai ver se dá match. Se rolar a combinação de cidades, as duas pessoas receberão um e-mail de confirmação se podem aceitar naquele momento. Após isso enviarem outro e-mail com as informações de cada pessoa, adotante ou do doador, e as duas decidem qual a melhor forma de fazer a adoção.</p>

                    <form>
                        <fieldset className='grupo'>
                            <div className='campo'>
                                <label for="nome"><strong>Nome</strong></label>                        
                                <input type="text" nome="nome" id="nome" required value={nome} 
                                onChange={(event) => {
                                    setNome(event.target.value)
                                }
                                } />
                            </div>

                            <div className='campo'>
                                <label for="sobrenome"><strong>Sobrenome</strong></label>
                                <input type="text" nome="sobrenome" id="sobrenome" required value={sobrenome} 
                                onChange={(event) => {
                                    setSobrenome(event.target.value)
                                }
                                } />
                            </div>
                        </fieldset>

                        <div className='campo'>
                            <label for="email"><strong>Email</strong></label>
                            <input type="email" nome="email" id="email" required value={email}
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }
                            } />
                        </div>

                        <div className='campo'>
                            <label><strong>Selecione o Estado</strong></label>
                            <select id="estado" value={estado} 
                            onChange={(event) => {
                                setEstado(event.target.value)
                            }
                            } >
                                <option selected disabled value="">Selecione</option>
                                <option value={"AC"}>AC</option>
                                <option value={"AL"}>AL</option>
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
                            <label><strong>Escreva o nome da sua cidade</strong></label>
                            <textarea row="1" id="cidade" nome="cidade" ></textarea>
                        </div>

                        <div className='campo'>
                            <label><strong>Fale conosco</strong></label>
                            <textarea row="6" id="experiencia" nome="experiencia"></textarea>
                        </div>

                        <button type="submit">Concluido</button>
                    </form>
                </div>
            </Main>
            <Footer />
        </>  
    )
}

export default Doar