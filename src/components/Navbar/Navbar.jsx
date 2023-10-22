import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css"
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Navbar = ({links, nombreBrand, greeting}) => {
    return(
        <>
            <nav className="navegacion">
                <h1 className="titulo nav-item">{nombreBrand}</h1>
                <ul className="nav-item">
                    {links.map((x) => <li className="nombre-menu nav-item"><a href="#">{x}</a></li>)}
                </ul>
            </nav>
            <ItemListContainer greeting={greeting} />
            <CartWidget/>
        </>
    )
}

export default Navbar