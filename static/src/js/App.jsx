import { useState } from 'react'
import '../css/App.css'
import viteImg from '../icons/vite.svg'
import reactImg from '../icons/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="#" target="_blank">
          <img src={viteImg} className="logo" alt="Vite logo" />
        </a>
        <a href="#" target="_blank">
          <img src={reactImg} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
