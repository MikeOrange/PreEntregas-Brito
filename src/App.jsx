import React from 'react'
import './App.css'
import MiNavbar from './components/MiNavbar/MiNavbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ErrorNotFound from './components/ErrorNotFound/ErrorNotFound';


function App() {
  const enlaces = [
    "Inicio",
    "Cursos",
    "Proyectos",
    "Acerca de",
    "Contacto"
  ]
  const nombreBrand = "Spinach Dev"
  const saludo="Bienvenidos a Spinach Dev!"

  return (
    <>
      <BrowserRouter>
        <MiNavbar links={enlaces} nombreBrand={nombreBrand} />
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting={saludo} />} />
          <Route exact path="/category/:id" element={<ItemListContainer greeting={saludo} />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<ErrorNotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
