import React, {useState, useEffect} from 'react'
import Item from '../Item/Item';
import { productAPIClient } from '../../productAPIClient';

function ItemList() {
  const [productData, setProductData] = useState([]);
  
  useEffect(() => {
    productAPIClient.getData().then((data) => {
        setProductData(data)
    })

  }, []);

  return (
    <div>
        {productData.length == 0 ? <p>Cargando...</p> : productData.map((elem) => <Item key={elem.id} product={elem} />)}
    </div>
  )
}

export default ItemList