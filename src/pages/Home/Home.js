import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

import './home.styles.css'
import Image2 from '../../assets/cha_verde2.png'

const Home = () => {
    return (
        <>
            <Menu />
            <Header title='Kombucha' />
            <Main>
                <div className='container'>
                    <article>
                        <h2>Quer fazer kombucha em casa mas não sabe por onde começar? </h2>

                        <p>A kombucha é uma bebida fermentada consumida há milhares de anos. Produzida a partir de uma colônia de bactérias e leveduras probióticas chamada de scoby (Symbiotic Colony of Bacteria and Yeast, em inglês, ou Colônia Simbiótica de Bactérias e Leveuras).</p>

                        <p>Alternativa saborosa a bebidas gaseificadas prejudiciais à saúde, como os refrigerantes, a kombucha é uma escolha cada vez mais popular, porque é rica em microrganismos que fazem bem à flora intestinal e vitaminas que fortalecem o sistema imunológico. Além disso, ainda facilita a absorção de nutrientes.</p>
                        <img src={Image2} alt="oi" />
                    </article>
                </div>

                <div className='container'>
                    <article>
                        <h2>Como preparar a Kombucha?</h2>
                        
                        <p>A Kombucha é uma bebida feita a partir da fermentação do chá por uma cultura de bactérias e leveduras. Para o preparo, pode-se usar qualquer tipo de chá da planta camelia sinensis,  como o chá branco, o chá verde e o chá preto.</p>
                       

                        <h3>Você irá precisar de:</h3>

                        <p>Chá e scoby que foi doado</p>
                        <p>1 litro de água filtrada</p>
                        <p>80 gramas de açucar branco (4 colheres sopa)</p>
                        <p>5 gramas de chá verde (3 colheres de chá)</p>
                        <p>1 pote de vidro grande (tipo aqueles de palmito)</p>
                        <p>Papel toalha</p>
                        <p>Elástico</p>

                        <h3>Modo de Preparo para a primeira fermentação (F1)</h3>

                        <p>Ferver a água</p>
                        <p>Adicionar o açucar</p>
                        <p>Adicionar ochá verde</p>
                        <p>Deixar o chá esfriar e ficar em temperatura hambiente</p>
                        <p>Peneirar e colocar o chá dentro de um pote de vidro</p>
                        <p>Acrescentar 10% do chá que foi doado juntamente com o scoby para baixar o ph da bebida</p>
                        <p>Tampe o pote com papel toalha e prenda-o com um elástico para proteger</p>
                        <p>Guardar o pote em um lugar limpo, longe de insetos, onde não tenha movimento o tempo todo, de preferência em cima de um armário</p>
                        <p>Atenção: Não colocar em cima de fornos, geladeira, ou microondas, pois a temperatura pode afetar a sua Kombucha. Não precisa ser dentro de armário, pois precisa-se de circulação de ar.</p>
                        <p>Deixar o pote parado e sem mexer durante alguns dias, de 12 à 15 dias, dependendo do local onde mora, pois a temperatura do hambiente interfere na produção dos microorganismos.</p>
                        <p>Após essa primeira fermentação que chamamos de F1, a sua bebida já está pronta para ser consumida</p>
                        <p>Antes de consumir, retirar 10% do chá fermentado, o antigo e o novo scoby que se formou, para poder refazer o processo.</p>

                        <h3>Modo de Preparo para a segunda fermentação (F2)</h3>

                        <p>20% de suco natural da sua preferência</p>
                        <p>80% de chá de Kombucha fermentado</p>
                        <p>Colocar em garrafas pet deixando 3 dedos de espaço</p>
                        <p>Deixar as garrafas descansarem por 4 dias</p>
                        <p>Refrigerar a bebida e tomar de preferência bem gelada</p>
                </article> 
                </div>         
            </Main>
            <Footer />
        </>  
    )
}

export default Home