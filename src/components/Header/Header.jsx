import './header.styles.css'

const Header = (props) => {
    return(
        <section>
            <div className="header">
                <h1>{props.children}</h1>
                <img src={props.image} alt="oi" />
            </div>
        </section>
    )
}

export default Header