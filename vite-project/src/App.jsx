import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const IncBtn = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const DecBtn = () => {
    setCount((prev) => prev + 1);
  };
  const SetBtn = () => {
    setCount(0);
  };
  return (
    <div>
      <center>
        <div className="btn">
          <button onClick={IncBtn}>-</button>
          <b>{count}</b>
          <button onClick={DecBtn}>+</button> <br />
        </div>
        <br />
        <button className="setBtn" onClick={SetBtn}>
          Сбросить
        </button>
      </center>
    </div>
  );
}

export default App;
