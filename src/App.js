import React, { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todolist from "./Todolist";
import * as firebase from "firebase";

function addtododb(todos, todoref) {
  todoref.remove();
  todoref.push(todos);
}

function App() {
  const [todos, settodos] = useState([]);
  const refinput = useRef();
  let lastlen = null;
  let len = null;
  const rootref = firebase.database().ref().child("react");
  const todoref = rootref.child("hello");

  len = todos.length

  
  if(lastlen !== len || lastlen === null){
    addtododb(todos, todoref);
    lastlen = todos.length
  }else{
    lastlen = todos.length
  }


  todoref.once("value", (snap) => {
    const s = snap.val();
    let t0t0;
    if (s != null) {
      const keys = Object.keys(s);
      
      for(let i=0; i < keys.length; i++){
        const k = keys[i]
        console.log("hello")
        t0t0 = s[k]
        console.log(t0t0)
        
      }
      settodos(t0t0)
      
    }
    return t0t0;
  });

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
