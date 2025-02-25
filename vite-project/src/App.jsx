import { useState } from 'react'
import './App.css'
const users = [
  { id: 1, name: "Иван", age: 25 },
  { id: 2, name: "Мария", age: 28 },
  { id: 3, name: "Петр", age: 35 }
];



function App() {

  return (
    <div>
      <UserList />
    </div>
  );
}


function UserList() {
  return (
    <>
      {
        users.map((user, idx) => (
          <div className="list" key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.age}</p>
          </div>
        ))
      }
    </>
  )
}
export default App
