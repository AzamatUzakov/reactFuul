import { useState } from 'react'
import './App.css'



function App() {
  const [colors, setColors] = useState(true)

  const color = () => {
    setColors(colors => !colors)
  }
  return (
    <div>
      <body style={{ backgroundColor: colors ? "white" : "black" }}>

        <button onClick={() => color()}>{colors ? "🌞" : "🌚"}</button>
      </body>
    </div>
  );
}

export default App
