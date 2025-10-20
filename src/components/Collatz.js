import React, { Component } from 'react'

export default class Collatz extends Component {
  cajaNumero = React.createRef();

  state = {
    numeros: []
  }

  // Helper que genera la secuencia a partir de un número dado
  generarCollatzDesdeNumero = (numero) => {
    let n = parseInt(numero);
    if (isNaN(n) || n <= 0) {
      this.setState({ numeros: [] });
      return;
    }
    let aux = [];
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = n * 3 + 1;
      }
      aux.push(n);
    }
    this.setState({ numeros: aux });
  }

  // Usada por el form cuando no se pasa prop 'numero'
  generarCollatz = (event) => {
    event.preventDefault();
    const numero = this.cajaNumero.current.value;
    this.generarCollatzDesdeNumero(numero);
  }

  componentDidMount() {
   
    if (this.props.numero) {
      this.generarCollatzDesdeNumero(this.props.numero);
    }
  }


  render() {
    return (
      <div>
        <h1>Conjetura Collatz</h1>
        
        {this.props.numero ? (
          <h3>número {this.props.numero}</h3>
        ) : (
          <form onSubmit={this.generarCollatz}>
            <label>Introduzca número</label>
            <input type="number" ref={this.cajaNumero} />
            <button>Mostrar conjetura</button>
          </form>
        )}

        <ul>
          {this.state.numeros.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>
    )
  }
}
