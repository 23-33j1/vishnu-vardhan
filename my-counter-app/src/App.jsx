/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>welcome Vishnu</h1>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
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
    </>
  )
}

export default App*/

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const appStyle = {
    textAlign: 'center',
    padding: '2rem',
backgroundColor: count > 5 ? 'black' : 'white',
    color: '#f3e309ff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }

  const countStyle = {
    fontSize: '2rem',
    margin: '1rem 0',
    color: count > 0 ? 'lightgreen' : count < 0 ? 'tomato' : 'white',
  }

  const buttonStyle = {
    margin: '0 0.5rem',
    padding: '0.7rem 1.2rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  }

  return (
    <div style={appStyle}>
      <h1>Simple Counter App</h1>
      <p style={countStyle}>Count: {count}</p>
      <div>
        <button
          style={{ ...buttonStyle, backgroundColor: '#3d4f18ff', color: 'white' }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          style={{ ...buttonStyle, backgroundColor: '#f44336', color: 'white' }}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          style={{ ...buttonStyle, backgroundColor: '#2196f3', color: 'white' }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
