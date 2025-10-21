
/*
  MenuRutas.js
  Componente de menú de navegación principal. Proporciona enlaces rápidos a rutas de ejemplos y páginas principales.
*/

import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href='/tabla/21'>Tabla de Multiplicar 21</a></li>
          <li><a href='/tabla/7'>Tabla de Multiplicar 7</a></li>
          <li><a href='/tabla/33'>Tabla de Multiplicar 33</a></li>
          <li><a href='/collatz/21'>Collatz 21</a></li>
          <li><a href='/collatz/7'>Collatz 7</a></li>
          <li><a href='/collatz/33'>Collatz 33</a></li>
         
        </ul>
      </div>
    )
  }
}
