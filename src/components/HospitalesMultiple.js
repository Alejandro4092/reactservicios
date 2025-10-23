/*
    HospitalesMultiple.js
    Componente que permite seleccionar múltiples hospitales desde una lista y:
    - Mostrar los trabajadores relacionados (componente `Trabajadores`).
    - Enviar una petición para incrementar salarios de trabajadores en hospitales seleccionados.
    Consume la API definida en `Global.apiTrabajadores` y ofrece controles para selección múltiple e incremento de salario.
*/
import React, { Component } from 'react'
import Trabajadores from './Trabajadores'
import Global from '../Global';
import axios from 'axios';

export default class HospitalesMultiple extends Component {
    selectHospital = React.createRef();
    cajaIncremento=React.createRef();
    url = Global.apiTrabajadores;
    
    state = {
        hospitales: [],
        hospitalesSeleccionados:[]
    }

    loadHospitales = () => {
        let request = "api/hospitales";
        axios.get(this.url + request).then(response => {
            this.setState({
                hospitales: response.data
            })

        })

    }
    componentDidMount = () => {
        this.loadHospitales();
    }
    getHospitalesSeleccionados = (event) => {
        event.preventDefault();
        let aux=[];
        let options=this.selectHospital.current.options;
        for(var option of options){
            if(option.selected===true){
                aux.push(option.value);
        }
        console.log(aux);
        }
        this.setState({
            hospitalesSeleccionados:aux
        })
        
        
    }
    incrementarSalario=(event)=>{
        event.preventDefault();
            let request="api/trabajadores/UpdateSalarioTrabajadoreshospitales?";
            let incremento=this.cajaIncremento.current.value;
            let idhospitales=this.state.hospitalesSeleccionados;
            let data="incremento="+incremento+"&";
            for(var id of idhospitales){
                data+="idhospital="+id+"&";
            }
            data=data.substring(0,data.length-1);
            console.log("Data: "+data);
            axios.put(this.url+request+data).then(response=>{
                console.log(data);
              
            })
        }
        
    render() {
        return (
            <div>
                <h1 style={{ color: "blue" }}>Hospitales Multiple</h1>
               
                <form>
                    <select ref={this.selectHospital} className='form-control' size="8" multiple>
                        {
                            this.state.hospitales.map((hospital, index) => {
                                return (
                                    <option key={index} value={hospital.idHospital}>
                                        {hospital.nombre}
                                    </option>
                                )
                            })
                        }

                    </select>
                    <button onClick={this.getHospitalesSeleccionados} className='btn btn-warning'>Mostrar trabajadores</button>
                    
                </form>
                <form>
                <label>Incrementar Salario</label>
                <input type="text" ref={this.cajaIncremento}/>
                <button className='btn btn-info' onClick={this.incrementarSalario}>Incrementar</button>
                </form>
                {
                    this.state.hospitalesSeleccionados.length !=0 && 
                    <Trabajadores idhospitales={this.state.hospitalesSeleccionados} />
                }
                
                


            </div>
        )
    }
}
