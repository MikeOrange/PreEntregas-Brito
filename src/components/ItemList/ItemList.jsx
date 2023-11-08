import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import { productAPIClient } from '../../productAPIClient';

function ItemList() {
  const {id} = useParams();
  const [productData, setProductData] = useState([]);
  const [loadStatus, setLoadStatus] = useState(false);
  
  useEffect(() => {
    productAPIClient.getData().then((data) => {
        const filteredData = id ? data.filter((elem) => elem.category === id ) : data;

        setProductData(filteredData)
        setLoadStatus(true)
    })

  }, [id]);

  console.log(loadStatus)

  return (
    <div>
        {loadStatus 
        ? productData.length == 0 ? <p>Pronto</p> : productData.map((elem) => <Item key={elem.id} product={elem} />)
        : <p>Cargando...</p> }
    </div>
  )
}

export default ItemList