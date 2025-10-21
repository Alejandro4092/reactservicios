
/*
    Cursos.js
    Componente que consume una API para obtener cursos y permite seleccionar uno para mostrar los alumnos asociados.
    Utiliza el componente Alumnos para listar alumnos por curso y gestiona la selección de alumno.
*/
import React, { Component } from 'react'
import axios from "axios"
import Global from '../../Global';
import Alumnos from './Alumnos';

export default class Cursos extends Component {
    url = Global.urlAlumnos;
    selectCursos = React.createRef();
    state = {
        Cursos: [],
        idCurso: 0,
        alumnoSeleccionado: null
    }
    loadCursos = () => {
        let request = "api/alumnos/cursos";
        axios.get(this.url + request).then(response => {
            console.log(response.data);
            this.setState({
                Cursos: response.data
            })

        })
    }
    componentDidMount = () => {
        this.loadCursos();
    }
    buscarAlumnos = (event) => {
        event.preventDefault();
        let idCurso = this.selectCursos.current.value;
        this.setState({
            idCurso: idCurso
        })
    }
    seleccionarAlumno = (alumno) => {
        console.log(alumno);
        this.setState({
            alumnoSeleccionado: alumno
        })
    }
    render() {
        return (
            <div>
                <h1>Cursos</h1>
                {
                    this.state.alumnoSeleccionado &&
                    (<div>
                        <h2>
                            {this.state.alumnoSeleccionado.nombre} {this.state.alumnoSeleccionado.apellidos}
                        </h2>
                        <img src={this.state.alumnoSeleccionado.imagen}></img>

                    </div>)

                }
                <form>
                    <select ref={this.selectCursos}>
                        {
                            this.state.Cursos.map((cursos, index) => {

                                return (<option key={index} value={cursos}>
                                    {cursos}
                                </option>)
                            })

                        }


                    </select>
                    <button onClick={this.buscarAlumnos}>
                        Buscar Alumnos
                    </button>
                </form>
                {
                    this.state.idCurso !== 0 &&
                    <Alumnos idCurso={this.state.idCurso} seleccionarAlumno={this.seleccionarAlumno} />
                }
                





            </div>
        )
    }
}
