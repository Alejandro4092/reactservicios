import React from 'react';
/*
    index.js
    Punto de entrada de la aplicación React.
    Nota (cambios añadidos hoy):
    - Se añadió Bootstrap (CSS y JS) para estilos y componentes.
    - Se importaron jQuery y Popper para compatibilidad con algunas funcionalidades de Bootstrap.
    - Se incorporó y se está renderizando el componente `HospitalesMultiple` en el root, que consume
        una API para gestionar hospitales y sus trabajadores.
    Este archivo inicializa la raíz React y renderiza el componente principal usado actualmente (HospitalesMultiple).
*/
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServicioApiCustomers from './components/ServicioApiCustomers';
import ServiceApiSuppliers from './components/ServiceApiSuppliers';
import EmpleadosDepartamento from './components/EmpleadosDepartamento';
import EmpleadosDepartamentov2 from './components/EmpleadosDepartamentov2';
import EmpleadosOficios from './components/EmpleadosOficios';
import Departamentos from './components/maestrodetalle/Departamentos';
import Cursos from './components/ejemplocomunicacion/Cursos';
import TablaMultiplicar from './components/TablaMultiplicar';
import AppRouter from './components/Router';
import MenuRutas from './components/MenuRutas';
import Router from './components/Router';
import HospitalesMultiple from './components/HospitalesMultiple';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <div >
      
         
    <HospitalesMultiple/>
   
    
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
