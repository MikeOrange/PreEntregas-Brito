import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from '../Item/Item';

function ItemDetailContainer() {
  const {id} = useParams();
  const [productData, setProductData] = useState(undefined);

  useEffect(() => {
    const promiseData = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const itemsFile = "/productos.js"
                fetch(itemsFile)
                .then((response) => response.json())
                .then((data) => resolve(data))
            }, 1000);
        });
    }
  
    promiseData().then((data) => {
        const filteredProduct = data.find((product) => product.id.toString() == id);
        setProductData(filteredProduct)
    })
  
  }, []);

  return (
    <div>
      {productData ?  <Item key={productData.id} product={productData} /> : <p>Cargando...</p> }
    </div>
  )
}

export default ItemDetailContainer