
/*
  MenuRutas.js
  Componente de menú de navegación principal. Proporciona enlaces rápidos a rutas de ejemplos y páginas principales.
*/

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to='/tabla/21'>Tabla de Multiplicar 21</NavLink></li>
          <li><NavLink to='/tabla/7'>Tabla de Multiplicar 7</NavLink></li>
          <li><NavLink to='/tabla/33'>Tabla de Multiplicar 33</NavLink></li>
          <li><NavLink to='/collatz/21'>Collatz 21</NavLink></li>
          <li><NavLink to='/collatz/7'>Collatz 7</NavLink></li>
          <li><NavLink to='/collatz/33'>Collatz 33</NavLink></li>
        </ul>
      </div>
    )
  }
}
