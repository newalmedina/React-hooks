
import React from 'react';
import '../css/Testimonio.css'
const Testimonio = (props) => {
    return (
        <div className='contenedor-testimonio' >
            <img
                src={require(`../img/${props.imagen}`)}
                alt="Foto img 1"
                className='imagen-testimonio' />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} en <strong> {props.empresa}</strong></p>
                <p className='texto-testimonio'>
                    {props.testimonio}
                </p>
            </div>
        </div>
    );
}

export default Testimonio;