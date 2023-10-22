import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css'

function CartWidget({count}) {
  return (
    <span>
      <span className='cart-count'>1</span>
      <span className='cart-icon'><FaShoppingCart /></span>
    </span>
  )
}

export default CartWidget