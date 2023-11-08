import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from '../Item/Item';
import ItemDetail from '../ItemDetail/ItemDetail';
import { productAPIClient } from '../../productAPIClient';
import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';

function ItemDetailContainer() {
  const {id} = useParams();
  const [productData, setProductData] = useState(undefined);
  const [loadStatus, setLoadStatus] = useState(false);

  useEffect(() => {
    productAPIClient.getData().then((data) => {
        const filteredProduct = data.find((product) => product.id.toString() == id);
        setProductData(filteredProduct)
        setLoadStatus(true)
    })
  
  }, []);

  return (
    <div>
      {
        loadStatus 
          ? productData ?  <ItemDetail key={productData.id} product={productData} /> : <ErrorNotFound /> 
          : <p>Cargando...</p> 
      }
    </div>
  )
}

export default ItemDetailContainer