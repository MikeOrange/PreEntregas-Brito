import React, {useContext, useState, useEffect} from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css'
import { CartContext } from '../../context/CartContext';


function CartWidget() {
  const {cartObject} = useContext(CartContext)
  const [totalItems, setTotalItems] = useState(0);

  let getTotalItemsInCart = (cart) => {
    return Object.values(cart).reduce((a, b) => a + b, 0);
  }

  useEffect(() => {
    setTotalItems(getTotalItemsInCart(cartObject));
  }, [cartObject]);

  return (
    <span>
      <span className='cart-count'>{totalItems}</span>
      <span className='cart-icon'><FaShoppingCart /></span>
    </span>
  )
}

export default CartWidget