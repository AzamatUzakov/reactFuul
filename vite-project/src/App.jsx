import { useState } from 'react'
import './App.css'



function App() {
  const [title, setTitle] = useState(false)

  const buttons = () => {
    setTitle(prev => !prev)
  }
  return (
    <>
      {title && <h1>Привет, я текст!</h1>}
      <button onClick={()=>buttons()}>
        {title ? "Скрыть текст" : "Показать текст"}
      </button> </>
  );
}

export default App
