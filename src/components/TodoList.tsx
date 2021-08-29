import React from 'react'
import {Link} from 'react-router-dom'
import Todo from './Todo'

import Processor from '../processor'

interface Props {
  processor: Processor
}


export const TodoList = (props: Props) =>{
  const todos = props.processor.list()
  return ( 
    <div className="my-10  ">
      <div className="font-bold text-4xl">Todo's:</div>
      <div>
        {todos.map(todo=>{
          return <Todo key={todo.id} todo={todo} />
        }) }
      </div>
      <Link to="/add" className="btn-blue  absolute bottom-10 right-10">+</Link>
    </div>
         )
}
