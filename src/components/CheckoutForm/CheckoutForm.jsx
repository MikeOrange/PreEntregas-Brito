import React from 'react'
import "./CheckoutForm.css"
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, getFirestore } from "firebase/firestore";


function CheckoutForm({tableArray, orderPrice, clearCart}) {
    
    const navigate = useNavigate();

    const saveToDb = (orderObject) => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, orderObject).then(({ id }) => {
            clearCart();
            navigate(`/checkout?orderId=${id}`);
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        if (formData.get("email") !== formData.get("confirmarEmail")) {
            alert("Los email deben coincidir");
            return;
        }

        const orderObject = {
            "items": tableArray,
            "total": orderPrice,
            "buyer": {
                "nombre": formData.get("nombre"),
                "apellido": formData.get("apellido"),
                "telefono": formData.get("telefono"),
                "email": formData.get("email"),
                "estado": "generada"
            }
        }
        
        saveToDb(orderObject);
    }


    return (
        <>
            <h4 className="checkout-title">Complete estos datos para finalizar su orden:</h4>

            <form className='checkout-form' onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />

                <label htmlFor="apellido">Apellido:</label>
                <input type="text" id="apellido" name="apellido" required />

                <label htmlFor="telefono">Teléfono:</label>
                <input type="tel" id="telefono" name="telefono" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="confirmarEmail">Confirmar Email:</label>
                <input type="email" id="confirmarEmail" name="confirmarEmail" required />

                <button type="submit">Comprar Ahora</button>
            </form> 
        </>
    )
}

export default CheckoutForm
