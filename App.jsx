import React, { useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'



function App() {
  let [todolist,setTodolist]=useState([])//use array because multiple data want to store



  let saveToDo=(event)=>{


    let toname = event.target.toname.value.trim();
    if(!todolist.includes(toname)){
      let finalDolist=[...todolist,toname]
      setTodolist(finalDolist)
    }
    else{
      toast.error("Are you Crazy ?")
    }

    event.preventDefault();
    event.target.toname.value = "";
  }


  let list=todolist.map((value,index)=> {
    return(
      <ToDoItem value={value} key={index} indexNumber={index}
      todolist={todolist}
      setTodolist={setTodolist}
      />
    )
  })

  return (
    <div className='App'>
      <h1>To-Do List</h1>
      <form onSubmit={saveToDo}>
        <input type="text" name='toname'/>
        <button>Save</button>
      </form>

      <div className='outerDiv'>
      <ul>
        {list}
      </ul>
      </div>

      <ToastContainer/>
    </div>
  );
};

export default App;

function ToDoItem({value,indexNumber,todolist,setTodolist}){

  let [status,setStatus]=useState(false)
  let deleteRow=()=>{
    let finalData=todolist.filter((v,i)=>i!=indexNumber)
    setTodolist(finalData) 
  }

  let checkStatus=()=>{
    setStatus(!status)
  }

  return(
    <li className={(status)? 'completetodo': ''} onClick={checkStatus}> {indexNumber+1+" "}{value} <span onClick={deleteRow}>&times;</span></li>
  )
}
