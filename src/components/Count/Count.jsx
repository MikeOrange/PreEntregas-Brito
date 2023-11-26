import React, {useState} from "react";

const Count = ({initial, stock, onCartAddCallback}) => {
    let [count, setCount] = useState(initial)

    const onAdd = () => {
        if (count < stock) {
            setCount(count+1);
        }
    }

    const onSubstract = () => {
        if (count > 0) {
            setCount(count-1);
        }
    }

    const onAddToCart = () => {
        if(onCartAddCallback) {
            onCartAddCallback(count);
        }
        setCount(0);
    }

    return(
        <>
            <div>
                <p>Añadidos: {count}</p>
                <button onClick={onAdd}>+</button>
                <button onClick={onSubstract}>-</button>
            </div>
            <button onClick={onAddToCart} disabled={count === 0}>Añadir al Carrito</button>
        </>
    )
}

export default Count