import React, {useContext, useState, useEffect} from 'react'
import "./Cart.css"
import { formatAsPesos } from '../../utils/currencyFormat'
import { CartContext } from '../../context/CartContext';
import { productAPIClient } from '../../productAPIClient';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { FaTrash } from 'react-icons/fa';

function Cart() {
  const {cartObject, removeFromCart, clearCart} = useContext(CartContext);
  const [loadStatus, setLoadStatus] = useState(false);
  const [tableArray, setTableArray] = useState([]);
  const [orderPrice, setOrderPrice] = useState(0);

  const obtenerObjetoPorId = (arr, x) => {
    return arr.find(function(objeto) {
      return parseInt(objeto.id) === parseInt(x);
    });
  }

  const updateTable = (apiData) => {
    let newOrderPrice = 0;
    const newTable = [];
    for (const property in cartObject) {
      let productData = obtenerObjetoPorId(apiData, property);
      let precio = productData.price * cartObject[property]
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
    // Usando currying para tener id
    removeFromCart(elem.id);
  };

  useEffect(() => {
    productAPIClient.getData().then((data) => {
        // Sustituir esto luego por cliente que traiga data de Firebase
        updateTable(data)
        setLoadStatus(true)
    })

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