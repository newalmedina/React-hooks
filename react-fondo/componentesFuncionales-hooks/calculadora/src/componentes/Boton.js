import React from 'react'
import '../css/Boton.css'
const Boton = (props) => {
    const esOperador = value => {
        return isNaN(value) && value !== '.' && value !== '='
    }
    return (
        <div
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
            onClick={() => props.manejarClick(props.children)}
        >
            {props.children}
        </div>
    );
}

export default Boton;