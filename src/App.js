import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todolist from "./Todolist"


function App() {

  const [todos] = useState(['learn react', 'hello'])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <input type="text" placeholder="Add a Todo" />
          <button>+</button>
          </div>
        <Todolist hello={todos} />
      </header>
    </div>
  );
}

export default App;
