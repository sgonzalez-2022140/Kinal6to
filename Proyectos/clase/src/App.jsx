import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
 
 
function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(100)
  let hola = 'hola'
 
  function aumentar(){
    setCount((count)=> count + 8)
    if (count === 200) {
      window.alert('Only 200');  
      resta(count)    
    }
  }
 
  function resta(){
    setCount((count)=> count - 8)
    if(count === -200) {
      window.alert('Only -200');
      aumentar(count)
    }
  }
 
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
     
       
           
      <div className="card">
 
     
        <h3>
          count is {count}
        </h3>                        
      <button className='sumar' onClick={() => aumentar()}>Sumar</button>
      <button className='restar' onClick={() => resta()}>Restar</button>
       
       
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
 
export default App