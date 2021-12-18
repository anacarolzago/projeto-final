import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

import './home.styles.css'
import Image1 from '../../assets/kombucha7.jpg'
import Image2 from '../../assets/cha2.jpg'
import Image3 from '../../assets/kombucha4.jpg'
import Image4 from '../../assets/kombucha2.jpg'

const Home = () => {
    return (
        <>
            <Menu />
            <Header title='Kombucha' />
            <Main>
                <div className='container1'>
                    <article className='bloco1'>
                        <h2>Kombucha</h2>
                        <p>A Kombucha é uma bebida fermentada consumida há milhares de anos. Produzida a partir de uma colônia de bactérias e leveduras probióticas chamada de scoby (Symbiotic Colony of Bacteria and Yeast, em inglês, ou Colônia Simbiótica de Bactérias e Leveuras).</p>
                        <p>Alternativa saborosa a bebidas gaseificadas prejudiciais à saúde, como os refrigerantes, a kombucha é uma escolha cada vez mais popular, porque é rica em microrganismos que fazem bem à flora intestinal e vitaminas que fortalecem o sistema imunológico. Além disso, ainda facilita a absorção de nutrientes.</p>
                    </article>
                    <img className='img_bloco1' src={Image1} alt="imagem de kombucha" />
                </div>
                <div className='container2'>
                    <article className='bloco2'>
                        <img className='img_bloco2' src={Image2} alt="oi" />

                        <h2>Como preparar a Kombucha?</h2>
                    </article>   
                    <article className='bloco3'>
                        <h3>Você irá precisar de:</h3>
                        
                        <p>Chá e scoby que foi doado</p>
                        <p>1 litro de água filtrada</p>
                        <p>80 gramas de açucar branco (4 colheres sopa)</p>
                        <p>5 gramas de chá verde (3 colheres de chá)</p>
                        <p>1 pote de vidro grande (tipo aqueles de palmito)</p>
                        <p>Papel toalha</p>
                        <p>Elástico</p>
                    </article>
                    <article className='bloco3'>
                        <h3>Modo de Preparo para a primeira fermentação (F1)</h3>
                        <ul>                        
                            <li>Ferver a água</li>
                            <li>Adicionar o açucar</li>
                            <li>Adicionar ochá verde</li>
                            <li>Deixar o chá esfriar e ficar em temperatura hambiente</li>
                            <li>Peneirar e colocar o chá dentro de um pote de vidro</li>
                            <li>Acrescentar 10% do chá que foi doado juntamente com o scoby para baixar o ph da bebida</li>
                            <li>Tampe o pote com papel toalha e prenda-o com um elástico para proteger</li>
                            <li>Guardar o pote em um lugar limpo, longe de insetos, onde não tenha movimento o tempo todo, de preferência em cima de um armário</li>
                            <li>Atenção: Não colocar em cima de fornos, geladeira, ou microondas, pois a temperatura pode afetar a sua Kombucha. Não precisa ser dentro de armário, pois precisa-se de circulação de ar.</li>
                            <li>Deixar o pote parado e sem mexer durante alguns dias, de 12 à 15 dias, dependendo do local onde mora, pois a temperatura do hambiente interfere na produção dos microorganismos.</li>
                            <li>Após essa primeira fermentação que chamamos de F1, a sua bebida já está pronta para ser consumida</li>
                            <li>Antes de consumir, retirar 10% do chá fermentado, o antigo e o novo scoby que se formou, para poder refazer o processo.</li>
                        </ul>
                    </article>
                    <img className='img_bloco3' src={Image3} alt="oi" /> 
                    <article className='bloco4'>
                        <h3>Modo de Preparo para a segunda fermentação (F2)</h3>

                        <p>20% de suco natural da sua preferência</p>
                        <p>80% de chá de Kombucha fermentado</p>
                        <p>Colocar em garrafas pet deixando 3 dedos de espaço</p>
                        <p>Deixar as garrafas descansarem por 4 dias</p>
                        <p>Refrigerar a bebida e tomar de preferência bem gelada</p>
                    </article>
                    <img className='img_bloco4' src={Image4} alt="oi" /> 
                </div>         
            </Main>
            <Footer />
        </>  
    )
}

export default Home