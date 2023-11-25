import React from 'react'
import Count from '../Count/Count';
import "./Item.css"
import { Link } from 'react-router-dom';
import { formatAsPesos } from '../../utils/currencyFormat'

// Este es el que se muestra en las listas
function Item({product}) {
  return (
    <div className='item-container'>
        <h3>{product.title}</h3>
        <img className="item-image" src={product.pictureUrl}/>
        <p>Precio: {formatAsPesos(product.price)}</p>

        <div><Link to={`/item/${product.id}`}>Ver detalle del producto</Link></div>

        <p>Stock Disponible: {product.stock}</p>
        <Count initial={0} stock={product.stock} />

    </div>
  )
}

export default Item