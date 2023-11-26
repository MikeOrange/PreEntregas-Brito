import React, {useContext} from 'react'
import Count from '../Count/Count';
import "./Item.css"
import { Link } from 'react-router-dom';
import { formatAsPesos } from '../../utils/currencyFormat'
import { CartContext } from '../../context/CartContext';

// Este es el que se muestra en las listas
function Item({product}) {

  const {addToCart} = useContext(CartContext);

  const onAddToCart = (quantity) => {
     addToCart(product.id, quantity);
  }

  return (
    <div className='item-container'>
        <h3>{product.title}</h3>
        <img className="item-image" src={product.pictureUrl}/>
        <p>Precio: {formatAsPesos(product.price)}</p>

        <div><Link to={`/item/${product.id}`}>Ver detalle del producto</Link></div>

        <p>Stock Disponible: {product.stock}</p>
        <Count initial={0} stock={product.stock} onCartAddCallback={onAddToCart} />

    </div>
  )
}

export default Item