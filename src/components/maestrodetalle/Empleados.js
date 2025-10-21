/*
  Empleados.js
  Componente que muestra la lista de empleados de un departamento específico usando una API.
*/
import React, { Component } from 'react'
import axios from "axios" 
import Global from '../../Global';

export default class Empleados extends Component {
     url=Global.urlEmpleados;
    state={
        empleados:[],
        texto:""

    }
    componentDidUpdate=(oldprops)=>{
        //Dibujamos las nuevas y las antiguas
        console.log("Current: "+this.props.idDepartamento);
        console.log("Old: "+oldprops.idDepartamento);
        //solamente actualizamos state si props a cambiado
        if(oldprops.idDepartamento!==this.props.idDepartamento){
            this.loadEmpleados();

        }
     
        }




   
    loadEmpleados=()=>{
        let idDepartamento=this.props.idDepartamento;
        let request="api/empleados/empleadosdepartamento/"+idDepartamento;
        axios.get(this.url+request).then(response=>{
            console.log("Leyendo empleados");
            this.setState({
                empleados:response.data
            })
        })

    }
    componentDidMount=()=>{
        this.loadEmpleados();
    }
  render() {
    return (
      <div>
        <h1>Empleados
            {this.props.idDepartamento}
        </h1>
        <h2>{this.state.texto}</h2>
        
        <ul>
            {
                this.state.empleados.map((empleado,index)=>{
                    return(<li key={index}>{empleado.apellido}-{empleado.oficio}-{empleado.departamento}</li>)
                })
  }

        </ul>
        




      </div>
    )
  }
}
