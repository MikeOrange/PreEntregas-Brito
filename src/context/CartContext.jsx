import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const cartInicial = {};
    const [cartObject, setCartObject] = useState(cartInicial);

    const addToCart = (productId, quantity) => {
        if (!(productId in cartObject)) {
            cartObject[productId] = 0;
        }
        cartObject[productId] += quantity;
        setCartObject({...cartObject});
    }

    const removeFromCart = (productId) => {
        delete cartObject[productId];
        setCartObject({...cartObject});
    }

    return (
        <CartContext.Provider value={
            {
                cartObject,
                addToCart,
                removeFromCart
            }
        } >
            {children}
        </CartContext.Provider>
    )

}