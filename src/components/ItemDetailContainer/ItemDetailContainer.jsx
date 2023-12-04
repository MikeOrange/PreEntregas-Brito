import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';
import { doc, getDoc, getFirestore} from "firebase/firestore"


function ItemDetailContainer() {
  const {id} = useParams();
  const [productData, setProductData] = useState(undefined);
  const [loadStatus, setLoadStatus] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const itemsRef = doc(db, "items", id);

    getDoc(itemsRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProductData({"id": id, ...snapshot.data()});
      } else {
        setProductData(null);
      }
      setLoadStatus(true);
    })
  }, [id]);

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