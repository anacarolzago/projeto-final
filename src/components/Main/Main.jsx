import './main.styles.css'

const Main = (props) => {
    return(
        <section className="corpo">
            <article>
                <h2>{props.children}</h2>
                <img src={props.image} alt="oi" />
                <p>{props.children}</p>
            </article>
        </section>
    )
}

export default Main