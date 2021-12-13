import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

import ImageBanner__ from '../../assets/cha_verde.png'

import './home.styles.css'

const Home = () => {
    return (
        <>
            <Menu />
            <Header image={ImageBanner__}></Header>
            <Main>
                <article>
                    <h2>Quer fazer kombucha em casa mas não sabe por onde começar? Venha conhecer este lugar incrível</h2>
                    <p>A kombucha é uma bebida fermentada consumida há milhares de anos. Ela é produzida a partir de uma colônia de bactérias e leveduras probióticas chamada de scoby (Symbiotic Colony of Bacteria and Yeast, em inglês, ou Colônia Simbiótica de Bactérias e Leveuras).</p>
                    <p>Alternativa saborosa a bebidas gaseificadas prejudiciais à saúde, como os refrigerantes, a kombucha é uma escolha cada vez mais popular, porque é rica em microrganismos que fazem bem à flora intestinal e vitaminas que fortalecem o sistema imunológico. Além disso, ainda facilita a absorção de nutrientes. Confira outros benefícios da kombucha.</p>
                </article>
                <article>
                    <h3>1. É fonte de probióticos</h3>
                    <p>Acredita-se que o hábito de fazer e ingerir kombucha tenha origem na China ou no Japão. A preparação consiste em adicionar cepas específicas de bactérias, leveduras e açúcar ao chá preto ou verde e deixar fermentar por uma semana ou mais (confira aqui estudo a respeito: 1). Durante esse processo, bactérias e leveduras formam uma película semelhante a um cogumelo na superfície do líquido, também chamado de SCOBY. O SCOBY é a colônia simbiótica viva de bactérias e leveduras, e pode ser usado para fermentar novas colônias de kombucha. O processo de fermentação produz ácido acético (também encontrado no vinagre) e vários outros compostos ácidos, álcool e gases que o tornam carbonatado (confira aqui estudo a respeito: 2).</p>
                    <p>Uma grande quantidade de bactérias também cresce na mistura. Embora ainda não haja evidências dos benefícios probióticos da kombucha, ela contém várias espécies de bactérias do ácido láctico que podem ter função probiótica (confira aqui estudo a respeito: 3).</p>
                    <p>Os probióticos fornecem bactérias saudáveis para o intestino, podendo melhorar muitos aspectos da saúde, incluindo digestão, inflamação e até perda de peso. Por esse motivo, adicionar bebidas como kombucha à dieta pode melhorar a saúde de várias maneiras.</p>
                </article>
                <article>
                    <h3>2. Benefícios do chá verde</h3>
                    <p>O chá verde é uma das bebidas mais saudáveis ​​do planeta, pois ele contém compostos bioativos, como os polifenóis, que funcionam como poderosos antioxidantes no organismo (confira aqui estudo a respeito: 4).</p>
                    <p>A kombucha feita com chá verde contém muitos dos mesmos compostos vegetais e, presumivelmente, possui alguns dos mesmos benefícios (confira aqui estudo a respeito: 5). Estudos mostram que beber chá verde regularmente pode aumentar o número de calorias que você queima, reduzir a gordura da barriga, melhorar os níveis de colesterol, ajudar no controle do açúcar no sangue e muito mais (confira aqui estudos a respeito: 6, 7, 8, 9).</p>
                    <p>Estudos também mostram que quem consome chá verde têm um risco reduzido de câncer de próstata, mama e cólon (confira aqui os estudos: 10, 11, 12).</p>
                </article>
                <article>
                    <h3>3. É rica em antioxidantes</h3>
                    <p>Antioxidantes são substâncias que combatem os radicais livres, moléculas reativas que podem danificar as células (confira aqui estudos a respeito: 13, 14).</p>
                    <p>Muitos cientistas acreditam que os antioxidantes naturalmente presentes nos alimentos e bebidas são melhores para a saúde do que os suplementos de antioxidantes (confira aqui estudo a respeito: 15). A kombucha, especialmente quando feita com chá verde, parece ter efeitos antioxidantes no fígado.</p>
                    <p>Os estudos com ratos constatam consistentemente que o consumo de kombucha reduz regularmente a toxicidade hepática causada por produtos químicos, em alguns casos em pelo menos 70% (confira aqui estudos a respeito: 16, 17, 18, 19). Embora não existam estudos em humanos sobre esse tópico, parece uma área promissora de pesquisa para pessoas com doença hepática.</p>        
                </article>
                <article>
                    <h3>4. Kombucha melhora a imunidade</h3>
                    <p>Uma das principais substâncias produzidas durante a fermentação da kombucha é o ácido acético, que também é abundante em vinagre. Como os polifenóis do chá, o ácido acético é capaz de matar muitos micro-organismos potencialmente prejudiciais (confira aqui estudo a respeito: 20).</p>
                    <p>A kombucha feita com chá preto ou verde tem propriedades antibacterianas e antifúngicas, particularmente contra os fungos causadores da candidíase (confira aqui estudo a respeito: 21).</p>
                    <p>Esses efeitos antimicrobianos suprimem o crescimento de bactérias e leveduras indesejáveis, mas não afetam as bactérias probióticas benéficas e leveduras envolvidas na fermentação da kombucha.</p>
                </article>
                <article>
                    <h3>5. Reduz o risco de doença cardíaca</h3>
                    <p>As doenças cardíacas são a principal causa de morte no mundo (confira aqui estudo a respeito: 22). Estudos em ratos mostraram que a kombucha pode melhorar muito dois marcadores de doenças cardíacas, LDL “ruim” e colesterol HDL “bom”, em apenas 30 dias (confira aqui estudos a respeito: 23, 24).</p>
                    <p>Ainda mais importante, o chá (especialmente o chá verde) protege as partículas de colesterol LDL da oxidação, que, acredita-se, contribui para prevenir doenças cardíacas (confira aqui estudos a respeito: 25, 26, 27). De fato, quem bebe chá verde tem um risco 31% menor de desenvolver doenças cardíacas, um benefício que também pode ser encontrado na kombucha (confira aqui estudos a respeito: 28, 29, 30).</p>
                </article>
                <article>
                    <h3>6. Kombucha também ajuda a gerenciar diabetes tipo 2</h3>
                    <p>A diabetes tipo 2 afeta mais de 300 milhões de pessoas em todo o mundo. É caracterizada por altos níveis de açúcar no sangue e resistência à insulina. Um estudo em ratos diabéticos descobriu que a kombucha diminuiu a digestão dos carboidratos, o que reduziu os níveis de açúcar no sangue; e também melhorou a função hepática e renal.</p>
                    <p>É provável que a kombucha feita com chá verde seja ainda mais benéfica, pois o chá verde reduz os níveis de açúcar no sangue (confira aqui estudo a respeito: 31). De fato, uma revisão de estudos realizados com quase 300.000 indivíduos constatou que os consumidores de chá verde tinham um risco 18% menor de se tornar diabéticos.</p>
                </article>
                <article>
                    <h3>7. Kombucha protege contra o câncer</h3>
                    <p>O câncer é uma das principais causas de morte no mundo. É caracterizada por mutação celular e crescimento descontrolado de células. Em estudos com tubos de ensaio, a kombucha ajudou a impedir o crescimento e a disseminação de células cancerígenas devido alta concentração de polifenóis e antioxidantes (confira aqui estudos a respeito: 33, 34).</p>
                    <p>Acredita-se que os polifenóis oriundos do chá utilizado para fazer a kombucha bloqueiam a mutação genética e o crescimento de células cancerígenas, além de promover a morte de células cancerígenas (confira aqui estudo a respeito: 35). Por esse motivo, não surpreende que os bebedores de chá tenham muito menos probabilidade de desenvolver vários tipos de câncer (confira aqui estudos a respeito: 36, 37, 38). No entanto, se a kombucha tem algum efeito anticâncer nas pessoas não foi confirmado. Mais estudos são necessários.</p>
                </article>
                <article>
                    <h3>Como fazer kombucha corretamente?</h3>
                    <p>A kombucha é rica em probióticos com muitos benefícios potenciais para a saúde. Você pode comprá-la pronta ou fazer você mesmo em casa. No entanto, certifique-se de prepará-lo corretamente.</p>
                    <p>Se for contaminada, a kombucha super fermentada pode causar sérios problemas de saúde e até a morte. A kombucha caseira também pode conter até 3% de álcool (confira aqui estudos a respeito: 2, 39, 40, 41).</p>
                    <p>A opção mais segura é comprar kombucha em uma loja ou online. Os produtos comerciais são saborosos e considerados sem álcool, pois devem conter menos de 0,5% de álcool (confira aqui estudo a respeito: 42). No entanto, verifique os ingredientes e tente evitar marcas com alto teor de açúcar. Se você pretende fazer em casa, aprenda com um profissional o modo mais seguro de fazer kombucha.</p>
                </article>               
            </Main>
            <Footer />
        </>  
    )
}

export default Home