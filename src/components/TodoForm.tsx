import React, {useRef, MouseEvent}  from 'react'

import Processor from '../processor'

interface Props {
  processor: Processor
  history:any // TODO: pending
}

export const TodoForm = (props: Props)=>{
  const todoName = useRef<HTMLInputElement>(null)
  
  console.log(props.history)


  const onClickDone = (event: MouseEvent):void =>{
    if(todoName && todoName.current) {
      props.processor.add(todoName.current.value) 
      todoName.current.value=""
    }
    props.history.push("/")
  }

  return (<div>
    <div>Create Todo:</div>

    <div>To-do </div>
    <input type="text" ref={todoName} placeholder="write your todo ..." />

    <div>
      <div>Tags</div>
    </div>
    <div>
      <div>Deadline </div>
      datepicker
    </div>

    <button className="btn-blue"  onClick={onClickDone}>Done</button>
  </div>)
}
