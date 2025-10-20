import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'


export default class EmpleadosDepartamentov2 extends Component {
    url=Global.urlEmpleados;
    urlDepartamentos=Global.urlDepartamentos
    selectDepartamento=React.createRef();

    buscarEmpleados=(event)=>{
        event.preventDefault();
        let idDepartamento=this.selectDepartamento.current.value;
        let request="api/Empleados/EmpleadosDepartamento/"+idDepartamento;
        axios.get(this.url+request).then(response=>{
            console.log("Leyendo empleados");
            this.setState({
                empleados:response.data
            })
          
        })
        
       

    }
    loadDepartamentos=()=>{
        let request="webresources/departamentos";
        axios.get(this.urlDepartamentos+request).then(response=>{
            console.log("cargandodepartamentos");
            this.setState({
                departamentos:response.data
            })
        })
            
        }
    state={
        empleados:[],
        departamentos:[]
    }
    componentDidMount=()=>{
        this.loadDepartamentos();
    }
  render() {
    return (
      <div>
        <h1 style={{color:"blue"}}>Empleados departamentos</h1>
        <form>
            <label>Selecciona Departamento</label>
            <select ref={this.selectDepartamento}>
                {
                   this.state.departamentos.map((departamento,index)=>{
                    return(<option key={index} value={departamento.numero}>{departamento.nombre}
                    </option>)
                   }) 


                }


            </select>
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
