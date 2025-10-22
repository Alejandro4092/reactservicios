import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class Trabajadores extends Component {
    url = Global.apiTrabajadores;
    state = {
        mensaje: "",
        trabajadores: []
    }
    loadTrabajadores = () => {
        let idhospitales = this.props.idhospitales;
        let data = "";
        for (var id of idhospitales) {
            data += "idhospital=" + id + "&";
        }
        data = data.substring(0, data.length - 1);
        this.setState({ mensaje: data });
        let request = "api/trabajadores/Trabajadoreshospitales?" + data;
        axios.get(this.url + request).then(response => {
            this.setState({
                trabajadores: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadTrabajadores();
    }
    componentDidUpdate = (oldProps) => {
        if (oldProps.idhospitales !== this.props.idhospitales) {
            this.loadTrabajadores();
        }

    }
    render() {
        return (
            <div>
                <h1>Trabajadores</h1>
                <h2 style={{ color: "red" }}>{this.state.mensaje}</h2>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                            <th>Id Hospital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.trabajadores.map((worker, index) => {
                                return (<tr key={index}>
                                    <td>{worker.apellido}</td>
                                    <td>{worker.apellido}</td>
                                    <td>{worker.salario}</td>
                                    <td>{worker.idHospital}</td>
                                </tr>)
                            })
                        }
                    </tbody>


                </table>
            </div>
        )
    }
}
