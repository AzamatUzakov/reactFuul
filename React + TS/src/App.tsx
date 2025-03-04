import { useState } from "react";
import "./App.css";

function validate(field: any, reg: any) {
  if (reg.test(field)) {
    return true;
  }
  return false;
}
const [valid, setVaild] = useState("")
const regExp = {
  login: /^[a-zA-Z0-9]{3,16}$/,
  password: /^[a-zA-Z0-9]{6,16}$/,
};

function App() {
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user = {};

    const fm = new FormData(event.currentTarget);

    fm.forEach((val, key) => (user[key] = val));

    console.log(user);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" placeholder="login" name="login" value={regExp.login} /><br />
        <input type="text" placeholder="password" name="password" /> <br />
        <button>send</button>
      </form>
    </div>
  );
}

export default App;
