import './App.css';
import './css/Boton.css';
import './css/Contador.css';
import freeCodeCampLogo from './img/logo.png'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react'

function App() {

  const [numClics, setNumClics] = useState(0)

  const manejarClic = () => {
    setNumClics(numClics + 1)
  }

  const reiniciarContador = () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className='freecodecam-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt="Logo free de FreeCodeCamp" />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto="clic"
          esBotonDeClick={true}
          manejarClick={manejarClic}
        />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
