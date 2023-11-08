import React from 'react'
import ItemList from '../ItemList/ItemList'


function ItemListContainer({greeting}) {
  return (
    <>
      <h1 className='saludo'>{greeting}</h1>
      <ItemList/>
    </>
  )
}

export default ItemListContainer