import React, {useState, useEffect} from 'react'
import Item from '../Item/Item';

function ItemList() {
  const [productData, setProductData] = useState([]);
  
  useEffect(() => {
    const promiseData = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const itemsFile = "/productos.js"
                fetch(itemsFile)
                .then((response) => response.json())
                .then((data) => resolve(data))
            }, 2000);
        });
    }

    promiseData().then((data) => {
        console.log(data);
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