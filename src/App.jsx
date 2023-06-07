// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import  React  from "react";
import ProjectsPage from './components/projects-page'
import ProjectsPage2 from './components/projects-page2'
import Button from './components/button'
import CardsProfile from './components/e-cards'
import LoguedUser from './components/login'
import UnLoggedUSer from './components/unlogin'
import ShoppingList from './components/shopping-list'
import {Greetings} from './components/greetings'
import { Greeter } from './components/greetings'
import { Greeter2 } from './components/greetings'
import PropTypesPractice from "./components/Prop-types-practice";
import RenderArrayList from "./components/Render-array";
import ButtonBootstrap from "./components/Button-Bootstrap";
import './App.css'



function App() {
  return(
  
  )
}

export default App



//Primeros 2 componentes
  // <ProjectsPage/>
  // <ProjectsPage2/>

//Componente boton
/* <h1>Welcome to my app</h1>
<Button/> */

//Componente de cards con datos de un objeto
/* <CardsProfile/> */

//Mostrar una u otra interfaz dependiendo de una condicional
//const isRegister = false;
//{isRegister ? (<LoguedUser/>) : (<UnLoggedUSer/>)}

//Mostrar una lista dependiendo de un arreglo de objetos
//<ShoppingList/>

//Mostrar algo entregando props
/* <Greetings name="Lucho"/>
<Greetings name="Cars"/>
<Greetings name="Messi"/> */

//Ejercicio con 2 props
//<Greeter first="Andrew" last="Cachon"/>

//Llamar componentes con diferentes tipos de datos en props
//<Greeter2 first="Lucho" last="cachon" status={true} age={42}/>

// return (
//     <blockquote cite="MONTESQIEU">
//       Hay que estudiar mucho para saber poco
//     </blockquote>
//   );

//Renderizar un array
{/* <RenderArrayList/> */}

//Boton con funcion onclick
{/* <ButtonBootstrap/> */}


// const [count, setCount] = useState(0)

// return (
// <>
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src={viteLogo} className="logo" alt="Vite logo" />
//     </a>
//     <a href="https://react.dev" target="_blank">
//       <img src={reactLogo} className="logo react" alt="React logo" />
//     </a>
//   </div>
//   <h1>Vite + React</h1>
//   <div className="card">
//     <button onClick={() => setCount((count) => count + 1)}>
//       count is {count}
//     </button>
//     <p>
//       Edit <code>src/App.jsx</code> and save to test HMR
//     </p>
//   </div>
//   <p className="read-the-docs">
//     Click on the Vite and React logos to learn more
//   </p>
// </>
// ]



