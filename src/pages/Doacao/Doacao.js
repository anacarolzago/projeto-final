import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

import ImageDoacao from '../../assets/localizacao.svg'

const Doacao = () => {
    return (
        <>
            <Menu />
            <Header image={ImageDoacao}>DOAÇÃO</Header>
            <Main />
            <p>Formulário Adotante</p>
            <Footer />
        </>        
    )
}

export default Doacao