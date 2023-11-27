import React from 'react'
import './App.css'
import MiNavbar from './components/MiNavbar/MiNavbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ErrorNotFound from './components/ErrorNotFound/ErrorNotFound';
import { CartProvider, CartContext } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  const categorias = [
    "Frontend",
    "Backend",
    "Devops",
    "QA",
    "Data Science",
    "Otros Cursos"
  ]
  const nombreBrand = "Spinach Dev"
  const saludo="Bienvenidos a Spinach Dev!"

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <main className="main-container">
            <MiNavbar links={categorias} nombreBrand={nombreBrand} />
            <Routes>
              <Route exact path="/" element={<ItemListContainer greeting={saludo} />} />
              <Route exact path="/category/:id" element={<ItemListContainer greeting={saludo} />} />
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route path="*" element={<ErrorNotFound/>} />
            </Routes>
          </main>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
