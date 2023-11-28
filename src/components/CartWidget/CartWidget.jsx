import React, {useContext} from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css'
import { CartContext } from '../../context/CartContext';


function CartWidget() {
  const {cartObject} = useContext(CartContext);
  const getTotalItemsInCart = (cart) => {
    return Object.values(cart).reduce((a, b) => a + b, 0);
  }
  const totalItems = getTotalItemsInCart(cartObject);

  return (
    <span>
      <span className='cart-count'>{totalItems}</span>
      <span className='cart-icon'><FaShoppingCart /></span>
    </span>
  )
}

export default CartWidget