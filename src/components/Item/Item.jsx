import React from 'react'
import Count from '../Count/Count';
import "./Item.css"

function Item({product}) {
  return (
    <div className='item-container'>
        <h3>{product.title}</h3>
        <img className="item-image" src={product.pictureUrl}/>
        <p>{product.description}</p>

        <a href="#">Ver detalle del producto</a>

        <p>Stock Disponible: {product.stock}</p>
        <Count initial={0} stock={product.stock} />

    </div>
  )
}

export default Item