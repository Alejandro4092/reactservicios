import React, { Component } from 'react'
import axios from "axios"

export default class ServiceApiSuppliers extends Component {
    cajaid = React.createRef();

    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers";

    state = {
        suppliers: [],
        supplier: []
    }



    loadSuppliers = () => {
        console.log("Cargando Suppliers");
        axios.get(this.url).then(response => {
            console.log(response.data)
            this.setState({
                suppliers: response.data.value
            });
        });
        console.log("Despues del servicio");
    }

    loadDatos = (event) => {
        event.preventDefault();
        let userid = this.cajaid.current.value; // ✅ convertir a número
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

                {
                    this.state.suppliers.map((suppliers, index) => {
                        return (
                            <h3 key={index} style={{ color: "blue" }}>
                                {suppliers.SupplierID} {suppliers.ContactName}
                            </h3>
                        );
                    })
                }

                
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
