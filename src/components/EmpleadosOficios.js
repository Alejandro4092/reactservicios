import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'


export default class EmpleadosOficios extends Component {
    url=Global.urlEmpleados;
    
    selectOficios=React.createRef();

    buscarEmpleados=(event)=>{
        event.preventDefault();
        // Filtramos a partir de la lista ya cargada en el estado
        let oficioSeleccionado = this.selectOficios.current.value;
        let request="api/Empleados/EmpleadosOficio/"+oficioSeleccionado;
        axios.get(this.url+request).then(response=>{
            console.log("leyendo oficios");
            this.setState({
                empleados:response.data
            })
        })
      
       
        
       

    }
    loadOficios=()=>{
        let request="api/Empleados";
        axios.get(this.url+request).then(response=>{
              console.log(response);
              var oficioauxiliar=[];
              var empleados=response.data
              empleados.forEach(empleados => {
                if(!oficioauxiliar.includes(empleados.oficio)){
                    oficioauxiliar.push(empleados.oficio);
                    console.log(oficioauxiliar);
                }


                
              });
              this.setState({
                oficios:oficioauxiliar
              })
        })

     
        }
    state={
        empleados:[],
        oficios:[]
    }
    componentDidMount=()=>{
        this.loadOficios();
    }
  render() {
    return (
      <div>
        <h1 style={{color:"blue"}}>Empleados departamentos</h1>
        <form>
            <label>Selecciona Oficio</label>
            <select ref={this.selectOficios}>
                {
                   this.state.oficios.map((oficio,index)=>{
                    // Cada 'oficio' ahora es una cadena. Usamos la cadena como value.
                    return(<option key={index} value={oficio}>{oficio}
                    </option>)
                   }) 


                }


            </select>
            <button onClick={this.buscarEmpleados}>Buscar Empleados por oficio</button>
        </form>
        <table border="1">
          <thead>
            <tr>
              <th>Id</th>
              <th>Apellido</th>
              
            </tr>
          </thead>
          <tbody>
          {
            this.state.empleados.map((empleado,index)=>{
                return(
                  <tr key={index}>
                    <td >{empleado.idEmpleado}</td>
                    <td>{empleado.apellido}</td>
                    
                  </tr>
                )
            })

        }
          </tbody>
        </table>
      </div>

    )
  }
}
