import CartWidget from "../CartWidget/CartWidget"
import './navBar.css'
const NavBar = () => {
    return (
        <header >
            <nav className="allNav">
                <h1 className="logoNav">Logo de mi E-commerce 🪴</h1>
                <div>
                    <button>Boton 1</button>
                    <button>Boton 2</button>
                    <button>Boton 3</button>
                </div>
                <CartWidget />
            </nav>
        </header>
    )
}

export default NavBar