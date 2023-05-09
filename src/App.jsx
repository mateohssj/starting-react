// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import ProjectsPage from './components/projects-page'
import ProjectsPage2 from './components/projects-page2'
import './App.css'

function App() {
  return(
    <div className='container'>
      <ProjectsPage/>
      <ProjectsPage2/>
    </div>
  )
}

export default App


// return (
//     <blockquote cite="MONTESQIEU">
//       Hay que estudiar mucho para saber poco
//     </blockquote>
//   );




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



