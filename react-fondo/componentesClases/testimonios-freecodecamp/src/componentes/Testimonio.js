
import React from 'react';
import '../css/Testimonio.css'

class Testimonio extends React.Component {
    state = {}
    render() {
        return (
            <div className='contenedor-testimonio' >
                <img
                    src={require(`../img/${this.props.testimonio.imagen}`)}
                    alt="Foto img 1"
                    className='imagen-testimonio' />
                <div className='contenedor-texto-testimonio'>
                    <p className='nombre-testimonio'><strong>{this.props.testimonio.nombre}</strong> en {this.props.testimonio.pais}</p>
                    <p className='cargo-testimonio'>{this.props.testimonio.cargo} en <strong> {this.props.testimonio.empresa}</strong></p>
                    <p className='texto-testimonio'>
                        {this.props.testimonio.testimonio}
                    </p>
                </div>
            </div>
        );
    }
}

export default Testimonio;

