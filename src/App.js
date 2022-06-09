import Testimonials from "./components/testimonials/testimonials";
import './App.css';

function App() {
  const estudiantes = [
     {
      img: 'https://www.freecodecamp.org/static/Shawn-bf42c7b909dae3111d18a21870ee6ca5.png',
      nombre : 'shawn',
      cargo : 'test',
      descripcion : 'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.' 
    },
     {
      img: 'https://www.freecodecamp.org/static/Emma-5a662db9bcf55809a1fefb2ea17634bc.png',
      nombre: 'Emma',
      cargo: 'Ingeniera de Software',
      descripcion: 'Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
    },
   {
    img: 'https://www.freecodecamp.org/static/Sarah-45de0e53b7b2520ebbac35c454b9748a.png',
    nombre: 'Sarah Chima',
    cargo: 'Ingeniera de Software',
    descripcion: 'freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
    }
  ]
  return (
    <div className="App">
      <div className="container-prin">
      <h1>Esto es lo que dicen los Alumnos</h1>
      {estudiantes.map((estudiante,index)=>{
        return <Testimonials key={index} img={estudiante.img} nombre={estudiante.nombre} cargo={estudiante.cargo} description={estudiante.descripcion} />
      })}
      </div>
    </div>
  );
}

export default App;
