import React from 'react'
import { Link } from 'react-router-dom'
import Count from '../Count/Count'
import "./ItemDetail.css"
import { formatAsPesos } from '../../utils/currencyFormat'


// Este es el que se muestra en Detail
function ItemDetail({product}) {
  return (
    <>
      <h2>{product.title}</h2>
      <img className="item-detail-image" src={product.pictureUrl}/>
      <p>{product.description}</p>
      <p>Precio: {formatAsPesos(product.price)}</p>

      <Link to={"/"}>Volver</Link>

      <p>Stock Disponible: {product.stock}</p>
      <Count initial={0} stock={product.stock} />
    </>
  )
}

export default ItemDetail