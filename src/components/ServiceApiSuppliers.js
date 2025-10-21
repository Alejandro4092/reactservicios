/*
  ServiceApiSuppliers.js
  Componente que consume la API de Northwind para mostrar y buscar proveedores (suppliers).
*/
import React, { Component } from 'react'
import axios from "axios"
import Global from '../Global';

export default class ServiceApiSuppliers extends Component {
    cajaid = React.createRef();

    url = Global.urlNorthwind;

    state = {
        suppliers: [],
        supplier: []
    }

    loadSuppliers = () => {
        console.log("Cargando Suppliers");
        var request="Suppliers"
        axios.get(this.url+request).then(response => {
            console.log(response.data)
            this.setState({
                suppliers: response.data.value
            });
        });
        console.log("Despues del servicio");
    }
    //Findsuplier id profe
    // findSupplierId=(event)=>{
    //   event.preventDefault();
    //   let idsupplier=parseInt(this.cajaid.current.value)
    //   //realizamos la peticion de nuevo a todos los provedoress
    //   axios.get(this.url).then(response=>{
    //     if(supplier.SupplierID==idSupplier){
    //       this.setState({
    //         supplier:supplier
    //       })
    //       break;
    //     }
    //   })
    // }

    loadDatos = (event) => {
        event.preventDefault();
        let userid = this.cajaid.current.value; 
        let provedor = this.state.suppliers.find(supplier => supplier.SupplierID == userid);
        console.log(userid);
        this.setState({
            supplier: provedor 
        });
    }

    componentDidMount = () => {
        console.log("Creando Componente");
        this.loadSuppliers();
    }

    render() {
        return (
            <div>
                <h1>ServiceApiSuppliers</h1>

                <label>Escribe ID de empleado</label>
                <form onSubmit={this.loadDatos}>
                    <input type='text' ref={this.cajaid}></input>
                    <button>Buscar Supplier</button>
                </form>
                <div>
                  <ul>

                {
                    this.state.suppliers.map((suppliers, index) => {
                        return (
                            <li key={index} style={{ color: "blue" }}>
                                {suppliers.SupplierID} {suppliers.ContactName}
                            </li>
                        );
                    })
                }
                </ul>
                </div>

                
                {this.state.supplier && (
                  <div>
                    
                    <h1>ID: {this.state.supplier.SupplierID}</h1>
                    <h1>Nombre {this.state.supplier.ContactName}</h1>
                    </div>
                    
                )}
            </div>
        );
    }
}
