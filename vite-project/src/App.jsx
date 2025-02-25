import { useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  const plus = () => {
    setCount(count => count + 1)
  }
  return (

    <div>

      <h1>{count}</h1>
      <button onClick={() => plus()}>plus</button>
    </div>
  );
}

export default App
