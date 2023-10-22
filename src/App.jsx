import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';

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
      <Navbar links={enlaces} nombreBrand={nombreBrand} greeting={saludo} />
    </>
  )
}

export default App
