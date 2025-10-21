
/*
    Alumnos.js
    Componente que recibe el id de un curso y muestra la lista de alumnos asociados.
    Permite seleccionar un alumno y comunica la selección al componente padre (Cursos).
*/
import React, { Component } from 'react';
import Global from '../../Global';
import axios from "axios";

export default class Alumnos extends Component {
    url = Global.urlAlumnos;
    state = {
        alumnos: [],
        // selectedAlumno: null
    };

    loadAlumnos = () => {
        const idCurso = this.props.idCurso;
        const request = "/api/Alumnos/FiltrarCurso/" + idCurso;
        axios.get(this.url + request).then(response => {
            console.log("Leyendo alumnos");
            this.setState({ alumnos: response.data });
        })
    };

    componentDidMount = () => {
        this.loadAlumnos();
    };

    componentDidUpdate = (oldprops) => {
        if (oldprops.idCurso !== this.props.idCurso) {
            this.loadAlumnos();
        }
    };

    // mostrarDetalles = (alumno) => {
    //     console.log(alumno);
    //     this.setState({ selectedAlumno: alumno });
    // };

    render() {
        return (
            <div>
                <h1>Alumnos del curso {this.props.idCurso}</h1>

                <ul>
                    {this.state.alumnos.map((alumno, index) => (
                        <li key={index}>
                            {alumno.nombre} {alumno.apellidos}
                            <button onClick={() => this.props.seleccionarAlumno(alumno)}>
                                Detalles
                            </button>
                        </li>
                    ))}
                </ul>

                {/* {this.state.selectedAlumno && (
                    <div>
                        <h3>Detalles del alumno</h3>
                        <ul>
                            <li>
                                {this.state.selectedAlumno.nombre} {this.state.selectedAlumno.apellidos}
                            </li>
                            <li>ID: {this.state.selectedAlumno.idAlumno}</li>
                            <li>
                                <img
                                    src={this.state.selectedAlumno.imagen}
                                    alt={this.state.selectedAlumno.nombre}
                                    style={{ width: "150px", height: "auto", borderRadius: "6px" }}
                                />
                            </li>
                        </ul>
                    </div>
                )} */}
            </div>
        );
    }
}
