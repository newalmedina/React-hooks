
import './App.css';
import Testimonio from './componentes/Testimonio';
function App() {

  const testimonioList = [
    {
      id: 1,
      nombre: 'Newal medina',
      pais: 'Rep. dominicana',
      imagen: 'imagen_1.jpeg',
      cargo: "Desarrollador Junior",
      empresa: "Aduxia",
      testimonio: 'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
    },
    {
      id: 2,
      nombre: 'Shawn Wang',
      pais: 'Singapur',
      imagen: 'imagen_2.jpeg',
      cargo: 'Ingeniero de Software',
      empresa: 'Amazon',
      testimonio: 'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
    },
    {
      id: 3,
      nombre: 'Sarah Chima',
      pais: 'Nigeria',
      imagen: 'imagen_3.jpeg',
      cargo: 'Ingeniera de Software',
      empresa: 'ChatDesk',
      testimonio: 'freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'

    }
  ]
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo qe dicen nuestros alumnos</h1>
        {testimonioList.map(testimonio => (
          <Testimonio
            key={testimonio.id}
            nombre={testimonio.nombre}
            pais={testimonio.pais}
            imagen={testimonio.imagen}
            cargo={testimonio.cargo}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}

          />
        ))}

      </div>
    </div>
  );
}

export default App;
