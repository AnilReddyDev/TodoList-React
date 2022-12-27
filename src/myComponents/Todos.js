import React from 'react'
import  {TodoItem} from './TodoItem'
export const Todos = (props) => {
  let myStyle={
    minHeight:"65vh"
  }
  return (
    <div className="container" style={myStyle}>
      <h4 className='text-center my-3'>Todo List</h4>
      {props.todos.length===0? "No Todos! Add One!!" :
      props.todos.map((todoo)=>{
        return <TodoItem todo={todoo} key={todoo.sno} onDelete={props.onDelete}/>

      }) }
    </div>
  )
}

