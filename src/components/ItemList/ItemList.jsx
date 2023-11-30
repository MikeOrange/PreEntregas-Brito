import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import { productAPIClient } from '../../productAPIClient';
import "./ItemList.css"


function ItemList() {
  const {id} = useParams();
  const [productData, setProductData] = useState([]);
  const [loadStatus, setLoadStatus] = useState(false);
  
  useEffect(() => {
    productAPIClient.getData().then((data) => {
        // Sustituir esto luego por cliente que traiga data de Firebase
        const filteredData = id ? data.filter((elem) => elem.category === id ) : data;

        setProductData(filteredData)
        setLoadStatus(true)
    })

  }, [id]);


  return (
    <div className="item-list-wrapper">
        {loadStatus 
        ? productData.length == 0 ? <p>Pronto</p> : productData.map((elem) => <Item key={elem.id} product={elem} className="item-individual" />)
        : <p>Cargando...</p> }
    </div>
  )
}

export default ItemList