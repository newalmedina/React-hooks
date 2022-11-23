
import './App.css';
import freeCodeCampLogo from './img/logo.png'
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt="Logo free de FreeCodeCamp" />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
