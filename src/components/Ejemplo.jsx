import React from "react";
import "./ejemplo.css"

const Ejemplo = () => {
    const buttonStyles = {
        backgroundColor: "blue",
        color: "white"
    }
    return (
        <div>
            <h1 className="demo">Clase 3</h1>
            <button style={buttonStyles}>Hola</button>
            <p style={{ fontStyle: "italic" }}>Cómo estás?</p>
        </div>
    )
};

export default Ejemplo;
