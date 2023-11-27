import React from 'react'
import "./Checkout.css"
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

function Checkout() {
    const [searhParams, setSearchParams] = useSearchParams();
    const orderId = searhParams.get('orderId');

    return (
        <div className="checkout">
            <h2 className="checkout-name">Gracias por comprar con nosotros!</h2>
            <p className="checkout-text">Tu orden es la número {orderId}</p>
            <Link to={"/"} className="checkout-link">Ir al comienzo</Link>
        </div>
    )
}

export default Checkout
