import React from 'react'
import "./hello.css"

export default function Todolist({  hello  }) {

   return(
        
       hello.map(hello => {
       return <div key={hello + Math.floor(Math.random() * 10000)} className="todo">{hello}</div>
       })
   )
}
