import React from 'react'

class Boton extends React.Component {
    state = {}
    render() {
        return (
            <button
                className={this.props.esBotonDeClick ? 'boton-clic' : 'boton-reiniciar'}
                onClick={this.props.manejarClick}
            >
                {this.props.texto}
            </button>
        );
    }
}

export default Boton;