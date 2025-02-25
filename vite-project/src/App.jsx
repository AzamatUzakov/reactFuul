import { useState } from 'react'
import './App.css'



function App() {
  const [onSelected, setOnSelected] = useState(true)
  const on = () => {
    setOnSelected(prev => !prev)
  }
  return (

    <div>


      <button onClick={() => on()}>{onSelected ? "Включено" : "Выключено"}</button>

    </div>
  );
}

export default App
