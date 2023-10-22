import React from 'react'
import './CartWidget.css'

function CartWidget({count}) {
  return (
    <span>
      <span className='cart-count'>1</span>
      <span>Icon</span>
    </span>
  )
}

export default CartWidget