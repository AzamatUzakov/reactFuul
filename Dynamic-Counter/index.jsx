import { useState } from 'react'
import './App.css'



function App() {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)

    const plusBtn = () => {
        setCount(prev => prev + step)
    }
    const minBtn = () => {
        setCount(prev => prev - step)
    }

    return (
        <div>
            <button onClick={() => plusBtn()}>+</button> <br />
            <h1>{count}</h1>
            <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} /><br />
            <button onClick={() => minBtn()}>-</button>
        </div>
    );
}

export default App
