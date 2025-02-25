import { useState } from 'react'
import './App.css'



function App() {
  
  const users = [
    { id: 1, name: "Иван", age: 25 },
    { id: 2, name: "Мария", age: 28 },
    { id: 3, name: "Петр", age: 35 }
  ];
  return (
    <div>
      <UserList users={users} />
    </div>
  );
}


function UserList({users}) {
  return (
    <>
      {
        users.map((user) => (
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
