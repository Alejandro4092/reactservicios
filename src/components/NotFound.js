/*
  NotFound.js
  Componente que muestra una página de error 404 personalizada cuando la ruta no existe.
*/
import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>Not Found</h1>
        <img src="https://httpcats.com/404.jpg" alt="Not Found"/>
        </div>
    )
  }
}
