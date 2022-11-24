import React from 'react'

import './App.css';
import './css/Boton.css';
import './css/Contador.css';
import freeCodeCampLogo from './img/logo.png'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClics: 0
    }
    this.manejarClic = this.manejarClic.bind(this)
    this.reiniciarContador = this.reiniciarContador.bind(this)
  }

  manejarClic() {
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  }

  reiniciarContador() {
    this.setState(({ numClics }) => ({ numClics: 0 }));
  }

  render() {
    return (
      <div className="App">
        <div className='freecodecam-logo-contenedor'>
          <img
            className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt="Logo free de FreeCodeCamp" />
        </div>
        <div className='contenedor-principal'>
          <Contador numClics={this.state.numClics} />
          <Boton
            texto="clic"
            esBotonDeClick={true}
            manejarClick={this.manejarClic}
          />
          <Boton
            texto="Reiniciar"
            esBotonDeClick={false}
            manejarClick={this.reiniciarContador}
          />
        </div>
      </div>
    );
  }
}

export default App;
