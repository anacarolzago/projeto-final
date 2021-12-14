import './main.styles.css'

const Main = (props) => {
    return(
        <section className="corpo">
            {props.children}
            <img src={props.image} alt="oi" />
        </section>
    )
}

export default Main