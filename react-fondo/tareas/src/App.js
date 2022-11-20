
import './App.css';
import freeCodeCampLogo from './img/logo.png'

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt="Logo free de FreeCodeCamp" />
      </div>
    </div>
  );
}

export default App;
