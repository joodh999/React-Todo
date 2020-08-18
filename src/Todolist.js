import React from 'react'
import "./hello.css"

export default function Todolist({  hello  }) {
   return(
       hello.map(hello => {
       return <div key={hello} className="todo">{hello}</div>
       })
   )
}
