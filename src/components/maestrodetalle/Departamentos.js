/*
    Departamentos.js
    Componente que permite seleccionar un departamento y mostrar los empleados asociados usando una API.
*/
import React, { Component } from 'react'
import axios from "axios" 
import Global from '../../Global';
import Empleados from './Empleados';

export default class Departamentos extends Component {
    url=Global.urlDepartamentos;
    selectDepartamento=React.createRef();
    state={
        departamentos:[],
        idDepartamento:0
    }
    loadDepartamentos=()=>{
        let request="webresources/departamentos";
        axios.get(this.url+request).then(response=>{
            console.log("Leyendo departamentos");
            this.setState({
                departamentos:response.data
            })
            
        })
    }
    componentDidMount=()=>{
        this.loadDepartamentos();
    }
    buscarEmpleados=(event)=>{
        event.preventDefault();
        let idDepartamento=this.selectDepartamento.current.value;
        this.setState({
            idDepartamento:idDepartamento
        })
    }
  render() {
    return (
      <div>
        <h1>Departamentos</h1>
        <form>
               <select ref={this.selectDepartamento}>
                {
                    this.state.departamentos.map((departamento,index)=>{
                   
                        return(<option key={index} value={departamento.numero}>
                            {departamento.nombre}
                        </option>)
                    })

                }
               

            </select>
            <button onClick={this.buscarEmpleados}>
                Buscar empleados
            </button>
        </form>
        {
            this.state.idDepartamento !== 0 &&
            <Empleados idDepartamento={this.state.idDepartamento}/>
        }
        
        
        
      
      
      </div>
    )
  }
}
