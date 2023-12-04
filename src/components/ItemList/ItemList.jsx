import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import "./ItemList.css"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"


function ItemList() {
  const {id} = useParams();
  const [productData, setProductData] = useState([]);
  const [loadStatus, setLoadStatus] = useState(false);
  
  useEffect(() => {
    const db = getFirestore();

    const itemsRef = collection(db, "items");
    let q;
    if (id) {
      q = query(
        itemsRef,
        where("category", "==", id)
      );
    } else {
      q = query(itemsRef);
    }

    getDocs(q).then((snapshot) => {
      setProductData(snapshot.docs.map((doc) => {
        return {"id": doc.id, ...doc.data()}
      }))
      setLoadStatus(true);
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