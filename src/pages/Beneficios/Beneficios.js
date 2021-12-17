import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

import './beneficios.styles.css'

const Beneficios = () => {
    return (
        <>
            <Menu />
            <Header />
            <Main>
                <article className='artigoBeneficios'>
                    <h3>É fonte de probióticos</h3>

                    <p>A preparação consiste em adicionar cepas específicas de bactérias, leveduras e açúcar ao chá preto ou verde e deixar fermentar por uma semana ou mais. Durante esse processo, bactérias e leveduras formam uma película na superfície do líquido, também chamado de SCOBY.</p>

                    <p>Os probióticos fornecem bactérias saudáveis para o intestino, podendo melhorar muitos aspectos da saúde, incluindo digestão, inflamação e até perda de peso. Por esse motivo, adicionar bebidas como kombucha à dieta pode melhorar a saúde de várias maneiras.</p>
                </article>

                <article className='artigoBeneficios'>
                    <h3>Benefícios do chá verde</h3>

                    <p>O chá verde é uma das bebidas mais saudáveis do planeta, pois ele contém compostos bioativos, como os polifenóis, que funcionam como poderosos antioxidantes no organismo</p>
                    <p>Estudos mostram que beber chá verde regularmente pode aumentar o número de calorias que você queima, reduzir a gordura da barriga, melhorar os níveis de colesterol, ajudar no controle do açúcar no sangue e muito mais. Outras pesquisas ainda mostram que quem consome chá verde têm um risco reduzido de câncer de próstata, mama e cólon.</p>
                </article>

                <article className='artigoBeneficios'>
                    <h3>É rica em antioxidantes e melhora a imunidade</h3>

                    <p>Antioxidantes são substâncias que combatem os radicais livres, moléculas reativas que podem danificar as células. A kombucha, especialmente quando feita com chá verde, parece ter efeitos antioxidantes no fígado.</p>

                    <p>Uma das principais substâncias produzidas durante a fermentação da kombucha é o ácido acético, que também é abundante em vinagre. Como os polifenóis do chá, o ácido acético é capaz de matar muitos micro-organismos potencialmente prejudiciais.</p>
                    <p>A kombucha feita com chá preto ou verde tem propriedades antibacterianas e antifúngicas, particularmente contra os fungos causadores da candidíase</p>
                    <p>Esses efeitos antimicrobianos suprimem o crescimento de bactérias e leveduras indesejáveis, mas não afetam as bactérias probióticas benéficas e leveduras envolvidas na fermentação da kombucha.</p>
                </article>

                <article className='artigoBeneficios'>
                    <h3>Reduz o risco de doença cardíaca</h3>

                    <p>Estudos em ratos mostraram que a kombucha pode melhorar muito dois marcadores de doenças cardíacas, LDL “ruim” e colesterol HDL “bom”, em apenas 30 dias. Ainda mais importante, o chá (especialmente o chá verde) protege as partículas de colesterol LDL da oxidação, que, acredita-se, contribui para prevenir doenças cardíacas.</p>
                </article>

                <article className='artigoBeneficios'>
                    <h3>Kombucha também ajuda a gerenciar diabetes tipo 2</h3>

                    <p>A diabetes tipo 2 afeta mais de 300 milhões de pessoas em todo o mundo. É caracterizada por altos níveis de açúcar no sangue e resistência à insulina. É provável que a kombucha feita com chá verde seja ainda mais benéfica, pois o chá verde reduz os níveis de açúcar no sangue</p>
                </article>

                <article className='artigoBeneficios'>
                    <h3>Kombucha protege contra o câncer</h3>

                    <p>O câncer é uma das principais causas de morte no mundo. É caracterizada por mutação celular e crescimento descontrolado de células. Em estudos com tubos de ensaio, a kombucha ajudou a impedir o crescimento e a disseminação de células cancerígenas devido alta concentração de polifenóis e antioxidantes</p>

                    <p>Acredita-se que os polifenóis oriundos do chá utilizado para fazer a kombucha bloqueiam a mutação genética e o crescimento de células cancerígenas, além de promover a morte de células cancerígenas. Por esse motivo, não surpreende que os bebedores de chá tenham muito menos probabilidade de desenvolver vários tipos de câncer. No entanto, se a kombucha tem algum efeito anticâncer nas pessoas não foi confirmado. Mais estudos são necessários.</p>
                </article>
            </Main>
            <Footer />
        </>        
    )
}

export default Beneficios