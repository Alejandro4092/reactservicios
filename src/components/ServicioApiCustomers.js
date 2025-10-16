import React, { Component } from 'react'
import axios from "axios" 

export default class ServicioApiCustomers extends Component {
  state={
    customers:[]
  }
  customers=[];
  url="https://services.odata.org/V4/Northwind/Northwind.svc/Customers" ;

  loadCustomers=()=>{
    console.log("Antes del Servicio");
    axios.get(this.url).then(response=>{
      //La informacion viene en response.data
      console.log(response.data);
      this.setState({
        customers:response.data.value
      })
    })

    console.log("Despues del Servicio");
  }
  componentDidMount=()=>{
    console.log("Creando componente");
    this.loadCustomers();
  }
  render() {
    return (
      <div>
        <h1>ServicioApiCustomers</h1>

        <button onClick={this.loadCustomers}>
          Load Customers
        </button>
        {
          this.state.customers.map((cliente,index)=>{
            return(<h3 style={{color:"blue"}}>{cliente.ContactName}</h3>)
          })
        }



      </div>
    )
  }
}
