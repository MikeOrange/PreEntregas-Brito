import React from 'react'
import './App.css'
import MiNavbar from './components/MiNavbar/MiNavbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';


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
      <MiNavbar links={enlaces} nombreBrand={nombreBrand} />
      <ItemListContainer greeting={saludo} />
    </>
  )
}

export default App
