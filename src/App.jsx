import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <h1>Rafshan Cheking and I LOVE U</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <img src='Nice.jpg' alt='Nice' />
     <br/>
      </div>
      <p className="read-the-docs">
        Learning 
      </p>
    </>
  )
}

export default App
