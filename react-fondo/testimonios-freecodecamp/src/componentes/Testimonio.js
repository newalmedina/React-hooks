
import React from 'react';
import '../css/Testimonio.css'
const Testimonio = (props) => {
    return (
        <div className='contenedor-testimonio' >
            <img
                src={require(`../img/${props.testimonio.imagen}`)}
                alt="Foto img 1"
                className='imagen-testimonio' />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'><strong>{props.testimonio.nombre}</strong> en {props.testimonio.pais}</p>
                <p className='cargo-testimonio'>{props.testimonio.cargo} en <strong> {props.testimonio.empresa}</strong></p>
                <p className='texto-testimonio'>
                    {props.testimonio.testimonio}
                </p>
            </div>
        </div>
    );
}

export default Testimonio;