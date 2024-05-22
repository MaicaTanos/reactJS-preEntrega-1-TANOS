import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './navBar.css'
const NavBar = () => {
    return (
        <header >
            <nav className="allNav">
                <div>
                    <img src="../img/Vida en maceta PLANT shop LOGO" alt="" />
                </div>
                <div>
                    <NavLink to={`/categoria/plantas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Plantas</NavLink>
                    <NavLink to={`/categoria/macetas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Macetas</NavLink>
                    <NavLink to={`/categoria/terrarios`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>terrarios</NavLink>
                    {/* <button>Boton 1</button>
                    <button>Boton 2</button>
                    <button>Boton 3</button> */}
                </div>
                <CartWidget />
            </nav>
        </header>
    )
}

export default NavBar