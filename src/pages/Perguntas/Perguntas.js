import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

import './perguntas.styles.css'
import Image7 from '../../assets/kombucha3.jpg'

const Perguntas = () => {
    return (
        <>
            <Menu />
            <Header />
            <Main>
                <div className='container'>
                    <article><h2>Perguntas frequentes</h2></article>
                    <article className='bloco_perguntas'>
                        <h3>Há contraindicações?</h3>
                        <p>A Food and Drug Administration, agência norte-americana responsável pela fiscalização e regulamentação dos alimentos e medicamentos nos Estados Unidos, refere que o consumo desta bebida é seguro para o ser humano, não se verificando evidência suficiente que demonstre toxicidade e efeitos adversos associados ao seu consumo.</p>
                    </article>
                    <article className='bloco_perguntas'>
                        <h3>Qual a diferença do kefir e da kombucha?</h3>
                        <p>Ambos se tratam de bebidas probióticas fermentadas que podem ser produzidas em casa. Ainda assim, o seu preparo não é igual. Em primeiro lugar porque a colônia é diferente, sendo conhecida como scoby. Além disso, enquanto o kefir é fermentado no leite ou na água, com a kombucha esse processo é feito no chá.</p>
                    </article>
                    <article className='bloco_perguntas'>
                        <h3>O que é líquido starter, chá de arranque da kombucha, chá starter de kombucha?</h3>
                        <p>É a porção de bebida já fermentada (kombucha) que devemos adicionar a cada novo lote, a solução essencial para a produção de kombucha. Ela tem 2 funções: 1. Inocular / introduzir microrganismos nativos da fermentação anterior e 2. Diminuir o pH da bebida inicial, alcançando um nível seguro que impeça a ação de microrganismos patogênicos, como os fungos formadores de mofo.</p>
                    </article>
                    <article className='bloco_perguntas'>
                        <h3>Como fazer o chá de arranque de kombucha ou líquido starter?</h3>
                        <p>Para que ele seja rico em microrganismo, forte e bem ativo, é necessária uma fermentação mínima de 10 a 12 dias do seu kombucha. A quantidade sugerida é de até 10% do total da bebida que você deseja fermentar. Por exemplo: Quero produzir 3 litros, precisamos de 300ml de líquido starter, mas isso pode variar para menos ou mais, dependendo da acidez do Starter. Você pode usar um pouco do líquido do seu scoby Hotel também.</p>
                    </article>
                    <article className='bloco_perguntas'>
                        <h3>O que é a primeira fermentação ou F1</h3>
                        <p>É o processo inicial de fermentação realizado pelas culturas probióticas em seus meios de cultivo. Ou seja, é a etapa onde adicionamos o scoby ao chá adoçado + líquido starter para a fermentação básica desses ingredientes.</p>
                    </article>
                    <article className='bloco_perguntas'>
                        <h3>O que é a segunda fermentação ou F2</h3>
                        <p>É o processo onde o líquido já fermentado na 1a fermentação, sofra uma nova fermentação por outro período de tempo, mas sem a cultura inicial (scoby). Nessa etapa, em geral anaeróbica (garrafa fechada), podemos adicionar alimento para as bactérias e leveduras (açúcares, frutas, sabores) para a incorporação no líquido, visando saborizar e aromatizar.</p>
                    </article>
                    <article>
                        <h3>Quanto tempo leva para a kombucha ficar pronta?</h3>
                        <p>Isso varia de acordo com os ingredientes utilizados, mas principalmente a variação de temperatura no local de fermentação. Caso se mantenha entre 23º a 28ºC, um período médio é de 7 – 10 dias na primeira fermentação.</p>
                    </article>
                    <article className='bloco_perguntas'>
                        <h3>A bebida tem data de validade?</h3>
                        <p>Depois de pronta, a kombucha preferencialmente deve ser conservada em geladeira. Apesar da kombucha ser uma bebida fermentada que se preserva muito bem, assim como vinho, ela contém uma série de bactérias, como as acéticas, que com o tempo podem conferir notas avinagradas à bebida, chegando a um ponto que deixa de ser palatável. Recomendamos o consumo em até 6 meses após a fabricação porque neste tempo, se mantido refrigerado, o sabor da kombucha ainda permanece o mesmo, lembrando que mesmo na geladeira, a fermentação não para, apenas desacelera.</p>
                    </article>
                    <article className='bloco_perguntas'>
                        <h3>Como eu sei que minha kombucha está pronta para ser consumida depois da primeira fermentação?</h3>
                        <p>Quando você notar: alteração do odor e sabor menos doce e levemente ácido, um pouco frisante, antes de vinagrar, variação do pH (abaixo de 4,5) e aformação de novo scoby na superfície.</p>
                    </article>
                    <article className='bloco_perguntas'>
                        <h3>Não se formou scoby na superfície, a bebida está pronta?</h3>
                        <p>A bebida estará pronta quando o sabor estiver do seu agrado ou no ponto de colheita, independente se criou um scoby espesso ou não. Também não há relação direta entre scoby bonito e bebida boa ou vice-versa.</p>
                    </article>
                    <article className='bloco_perguntas'>
                        <h3>O que eu faço se minha kombucha ficou com gosto de vinagre?</h3>
                        <p>Isso ocorre quando há a transformação do álcool em ácido acético por bactérias acéticas durante a fermentação do kombucha. Em geral isso é observado quando a bebida fermentada excedeu o tempo de colheita. Existem dois caminhos: 1. Faça uma nova solução com chá adoçado e adicione a esse lote para equilibrar o sabor e tentar salvá-lo. 2. Envase e use como um excelente Vinagre Probiótico.</p>
                    </article>
                    <article className='bloco_perguntas'>
                        <h3>Quais recipientes posso usar para fazer minha kombucha?</h3>
                        <p>Preferencialmente use recipientes de vidro que facilitam a higienização, reduzem as chances da presença de microrganismos patogênicos e a transferência de odores ao fermentado, além de resistirem a acidez. Não utilize recipientes plásticos, cerâmica sem esmalte, nem ferro ou inox. Se usar vidros reutilizáveis (palmito, azeitona, conservas), esterilize antes com água fervida de 2 a 3 minutos e borrife álcool 70%.</p>
                    </article>
                    <article className='bloco_perguntas'>
                        <h3>Posso lavar o scoby?</h3>
                        <p>Não é necessário. O enxágue regular pode prejudicar a atividade biológica do scoby. Mas caso queira remover possíveis excedentes de resíduos de chá e leveduras (aquele filamentos esverdeados), higienize no próprio chá fermentado dentro do pote de vidro.</p>
                    </article>
                    <article className='bloco_perguntas'>
                        <h3>Posso fazer kombucha sem ter scoby?</h3>
                        <p>Sim, há dois métodos para isso. 1. Use uma kombucha pronta sem sabor e faça um chá adoçado e adicione o conteúdo dessa garrafa e deixe fermentando por pelo menos 20 dias. O processo pode ser instável ou incerto, podendo até gerar mofo, devido à baixa acidez, mas é uma possibilidade. 2. Usar apenas o líquido starter com pH ácido controlado. Caso você receba ou adquira esse líquido, poderá fazer a mesma receita do kombucha feito com um scoby e terá os mesmos resultados.</p>
                    </article>
                    <article className='bloco_perguntas'>
                        <h3>Posso usar mel para fermentar a kombucha?</h3>
                        <p>Sim, esse é o método de criação do chamado “Jun“, uma das adaptações possíveis do scoby.</p>
                    </article>
                    <article className='bloco_perguntas'>
                        <h3>Qual a quantidade de álcool na kombucha pronta?</h3>
                        <p>Como em todas as culturas fermentadas, a formação de álcool ocorre naturalmente. Embora varie de lote para lote, seguindo processos controlados de produção, a quantidade de álcool gerado fica abaixo de 0,5%, não sendo classificada como Bebida Alcóolica.</p>
                    </article>
                    <article className='bloco_perguntas'>
                        <h3>Tomar kombucha emagrece?</h3>
                        <p>A bebida tem seu benefício principal no auxílio ao bom funcionamento do intestino, aumentando a sensação de bem-estar. Mas de forma isolada, o consumo de kombucha não é responsável pela perda ou redução de peso. Ele contém sim, ácidos importantes para o intestino, além de vitaminas e aminoácidos que favorecem um estado de renovação da microbiota intestinal, com eliminação de toxinas que podem auxiliar no emagrecimento, mas para que um plano alimentar tenha sucesso, uma alimentação adequada aliada a uma vida saudável é fundamental.</p>
                    </article>
                    <article className='bloco_perguntas'>
                        <h3>Quem tem gastrite pode tomar kombucha?</h3>
                        <p>Sim. Alguns estudos apontam que o consumo de kombucha alivia os sintomas de gastrite e também auxilia no combate à H. pylori, bactérias que ocasiona sintomas de dor e queimação. De modo geral, sugerimos que avalie como seu organismo se comporta durante o consumo regular de kombucha e se os sintomas reduzem ou não.</p>
                    </article>
                    <article className='bloco_perguntas'>
                        <h3>Preciso lavar o recipiente de vidro a cada fermentação?</h3>
                        <p>Sim. Devem ser lavados normalmente com água e detergente ou sabão e enxaguados.</p>
                    </article>
                    <article className='bloco_perguntas'>
                        <h3>Como obter uma doação?</h3>
                        <p>Temos um Banco de Dados Nacional obtido através do cadastro de voluntários de doadores em nosso site. Clique aqui. Ao encontrarmos um doador disponível na mesma cidade que o adotante, enviamos um e-mail para as duas pessoas comunicando o match, e com a solicitação para ambos aceitarem. Após isso é enviado outro e-mail com as informações da outra pessoa, adotante ou do doador.</p>
                    </article>
                    <img className='img_bloco5' src={Image7} alt="imagem de kombucha" /> 

                    <p className='p_perguntas'>Ficou com dúvidas ou quer participar do nosso grupo no whatsapp? Mande uma mensagem para nossa equipe, teremos o maior prazer em lhe responder. Venha fazer parte dessa comunidade de mães de kombucha que trocam receitas, segredinhos e claro muita experiência. Vem ser kombucheira junto a gente!</p>
                </div>
            </Main>
            <Footer />
        </>  
    )
}

export default Perguntas