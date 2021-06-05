import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
const Menu = () => {

    return (
        <aside className="Menu">


            <nav>

                <Link to="/">Início</Link>
                <Link to="/Empresa">Empresa</Link>
                <Link to="/Clientes">Clientes</Link>
                <Link to="/Dialise">Diálise de Diesel</Link>
               
                <Link to="/Contato">Contato</Link>

                <div class="animation start-home"></div>
            </nav>


        </aside>
    )
};

export default Menu;