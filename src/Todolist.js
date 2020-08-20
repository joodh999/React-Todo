import React from "react";
import "./hello.css";

export default function Todolist({ hello, handleremove }) {
  return hello.map((hello) => {
    return (
      <div
        onClick={() => handleremove(hello)}
        key={hello + Math.floor(Math.random() * 10000)}
        className="todo"
      >
        {hello} 
      </div>
    );
  });
}
