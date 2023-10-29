import React, {useState} from "react";

const Count = ({initial, stock}) => {
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

    return(
        <div>
            <p>Añadidos: {count}</p>
            <button onClick={onAdd}>+</button>
            <button onClick={onSubstract}>-</button>
        </div>
    )
}

export default Count