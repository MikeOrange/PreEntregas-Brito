import React, {useContext, useState, useEffect} from 'react'
import "./Cart.css"
import { formatAsPesos } from '../../utils/currencyFormat'
import { CartContext } from '../../context/CartContext';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { FaTrash } from 'react-icons/fa';
import { collection, getDocs, getFirestore, query, where, documentId } from "firebase/firestore"


function Cart() {
  const {cartObject, removeFromCart, clearCart} = useContext(CartContext);
  const [loadStatus, setLoadStatus] = useState(false);
  const [tableArray, setTableArray] = useState([]);
  const [orderPrice, setOrderPrice] = useState(0);

  const obtenerObjetoPorId = (arr, x) => {
    return arr.find(function(objeto) {
      return objeto.id === x;
    });
  }

  const updateTable = (apiData) => {
    let newOrderPrice = 0;
    const newTable = [];

    for (const property in cartObject) {
      let productData = obtenerObjetoPorId(apiData, property);
      let precio = productData["price"] * cartObject[property]
      let tableRow = {
        "id": property,
        "nombre": productData.title,
        "cantidad": cartObject[property],
        "precioUnitario": productData.price,
        "precio": precio
      }
      newOrderPrice += precio;
      newTable.push(tableRow);
    }
    setTableArray(newTable);
    setOrderPrice(newOrderPrice);
  }

  const removeThisFromCart = elem => event => {
    removeFromCart(elem.id);
  };

  const getNewData = () => {
    const db = getFirestore();
    const itemsRef = collection(db, "items");
    const cartKeys = Object.keys(cartObject);

    if (cartKeys.length !== 0) { 
      const q = query(
        itemsRef,
        where(documentId(), "in", cartKeys)
      );

      getDocs(q).then((snapshot) => {
        updateTable(snapshot.docs.map((doc) => {
          return {"id": doc.id, ...doc.data()}
        }))
        setLoadStatus(true);
      })
    } else {
      updateTable([]);
      setLoadStatus(true);
    }
  }

  useEffect(() => {
    getNewData();
  }, [cartObject]);


  if (tableArray.length === 0) {
    return (
      <>
        <h2>Tabla de Productos</h2>
        <p>Agregue productos a su carrito para proceder con la compra...</p>
      </>
    )
  }

  return (
    <div>
      <h2>Tabla de Productos</h2>
      <table className='order-table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Precio</th>
                <th>Borrar</th>
            </tr>
        </thead>
        <tbody>
            {loadStatus ?
              <>
                {tableArray.map((elem) => {
                  return (
                    <tr key={elem.id}>
                      <td>{elem.id}</td>
                      <td>{elem.nombre}</td>
                      <td>{elem.cantidad}</td>
                      <td>{formatAsPesos(elem.precioUnitario)}</td>
                      <td>{formatAsPesos(elem.precio)}</td>
                      <td>{<FaTrash className="trash-icon" onClick={removeThisFromCart(elem)} />}</td>
                    </tr>
                  )
                })}
              </>
              :
              <tr>
               <td colSpan="5">Cargando...</td>
              </tr> }
        </tbody>
        <tfoot>
            <tr>
                <td colSpan="4"><b>Total</b></td>
                <td>{formatAsPesos(orderPrice)}</td>
                <td></td>
            </tr>
        </tfoot>
      </table>

      <CheckoutForm tableArray={tableArray} orderPrice={orderPrice} clearCart={clearCart}/>

    </div>
  )
}

export default Cart