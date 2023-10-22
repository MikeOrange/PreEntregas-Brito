import React, {useState} from "react";

const Count = ({initial, stock}) => {
    let [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(count+1);
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count-1);
        }
    }

    return(
        <div>
            <p>Contador: {count}</p>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    )
}

export default Count