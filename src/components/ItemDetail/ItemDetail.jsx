import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Count from '../Count/Count'
import "./ItemDetail.css"
import { formatAsPesos } from '../../utils/currencyFormat'
import { CartContext } from '../../context/CartContext';


// Este es el que se muestra en Detail
function ItemDetail({product}) {
  const {addToCart} = useContext(CartContext);

  const onAddToCart = (quantity) => {
     addToCart(product.id, quantity);
  }

  return (
    <>
      <h2>{product.title}</h2>
      <img className="item-detail-image" src={product.pictureUrl}/>
      <p>{product.description}</p>
      <p>Precio: {formatAsPesos(product.price)}</p>

      <Link to={"/"}>Volver</Link>

      <p>Stock Disponible: {product.stock}</p>
      <Count initial={0} stock={product.stock} onCartAddCallback={onAddToCart} />
    </>
  )
}

export default ItemDetail