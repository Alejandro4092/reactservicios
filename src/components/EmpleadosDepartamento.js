import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'


export default class EmpleadosDepartamento extends Component {
    url=Global.urlEmpleados;
    cajaDepartamento=React.createRef();

    buscarEmpleados=(event)=>{
        event.preventDefault();
        let idDepartamento=this.cajaDepartamento.current.value;
        let request="api/Empleados/EmpleadosDepartamento/"+idDepartamento;
        axios.get(this.url+request).then(response=>{
            console.log("Leyendo empleados");
            this.setState({
                empleados:response.data
            })
          
        })
       

    }
    state={
        empleados:[]
    }
  render() {
    return (
      <div>
        <h1 style={{color:"blue"}}>Empleados departamentos</h1>
        <form onSubmit={this.buscarEmpleados}>
            <label>Introduzca ID Departamento</label>
            <input type='number' ref={this.cajaDepartamento}></input>
            <button onClick={this.buscarEmpleados}>Buscar Empleados</button>
        </form>
        <ul>
        {
            this.state.empleados.map((empleado,index)=>{
                return(<li key={index}>{empleado.apellido}</li>)
            })

        }
        </ul>
      </div>

    )
  }
}
