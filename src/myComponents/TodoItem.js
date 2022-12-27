import React from 'react'
//either we can use prop or we can use {todo} directly
//as of here I am using todo directly because it make syntax easy in this case
export const TodoItem = ({todo,onDelete}) => {
  return (
    <div className='marg'>
      <h5>{todo.title}</h5>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>onDelete(todo)}>delete</button>
    </div>
  )
}
