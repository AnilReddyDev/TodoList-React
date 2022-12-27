import React, { useState , useEffect} from 'react';
import './App.css';
import Header from './myComponents/Header'
import {AddTodo} from './myComponents/AddTodo'
import {Todos} from './myComponents/Todos'
import {Footer} from './myComponents/Footer'

function App() {
  let initTodo;
  if (localStorage.getItem("todoelements")===null){
    initTodo = []
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todoelements"))
  }
  const onDelete = (todo)=>{
    console.log("onDelete is clicked!",todo)

    setTodos(todoelements.filter((el)=>{
      return el!==todo;
    }));
    localStorage.setItem("todoelements",JSON.stringify(todoelements))
  }

  const addTodo = (title,desc)=>{
    let sno;
    if(todoelements.length==0){
       sno=0
    }
    else{
       sno = todoelements[todoelements.length-1].sno + 1
    }
    let myTodo={
      sno: sno,
      title: title,
      desc: desc
    }
    console.log(myTodo)
    setTodos([...todoelements,myTodo])

  }
  
  const [todoelements , setTodos] = useState(initTodo)
  
  useEffect(() => {
    localStorage.setItem("todoelements",JSON.stringify(todoelements))
  }, [todoelements])
  

  return (
    <>
      <Header title="My Todo App" dropdown={false}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todoelements} onDelete={onDelete}/>
      <Footer/>
    </>
  );

}

export default App;
