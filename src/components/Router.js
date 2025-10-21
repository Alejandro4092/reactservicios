
/*
  Router.js
  Enrutador principal de la aplicación. Define rutas dinámicas y estáticas usando react-router-dom para los distintos componentes.
*/
import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import TablaMultiplicar from './TablaMultiplicar'
import Collatz from './Collatz'
import { useParams } from 'react-router-dom'
import MenuRutas from './MenuRutas'
export default class Router extends Component {
  render() {
    function TablaMultiplicarElement() {
      //Esta funcion nos servira mpar capturar los parametros recibidos en una ruta y enviarlos con props a nuestro componente 
      //Voy a enviar un parametro llamado minumero
      let { minumero } = useParams();
      //Devolvemos el componente con sus props
      return <TablaMultiplicar numero={minumero} />
    }
    function CollatzElement() {
      let { minumero } = useParams();
      return <Collatz numero={minumero} />
    }






    return (
      <BrowserRouter>
        <MenuRutas />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tabla/:minumero' element={<TablaMultiplicarElement />} />
          <Route path='/collatz/:minumero' element={<CollatzElement />} />
          <Route path='/not' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
