import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

import ImageDoar from '../../assets/localizacao.svg'

const Doar = () => {
    return (
        <>
            <Menu />
            <Header image={ImageDoar}>DOAR</Header>
            <Main />

            <p>Formulário Doador</p>
            <Footer />
        </>  
    )
}

export default Doar