import React, { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todolist from "./Todolist";



function App() {
  const [todos, settodos] = useState([]);
  const refinput = useRef();
  
  function handleclick(e) {
    e.preventDefault();
    const hi = refinput.current.value;
    if (hi === "") return;
    settodos([...todos, hi]);
    refinput.current.value = null;
  }

  function handleremove(hello) {
    let newtodoarr = todos.filter((e) => e !== hello);
    settodos(newtodoarr);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleclick}>
          <input ref={refinput} type="text" placeholder="Add a Todo" />
          <button onClick={handleclick}>+</button>
        </form>
        <Todolist hello={todos} handleremove={handleremove} />
      </header>
    </div>
  );
}

export default App;
