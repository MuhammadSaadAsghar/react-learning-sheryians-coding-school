
import { useState } from 'react'
import './App.css'

function App() {
 
const [task, setTask] = useState("")
const [result, setResult] = useState([])

const tasksubmit=(e)=>{
e.preventDefault();

if (task==="") return;

setResult([...result,task])
setTask("");
}

const deletetask=(idx)=>{
  const newtask=[...result]
   newtask.splice(idx,1)
  setResult(newtask)
}

  return (
    <>
<div className="container">
  <div className="todo-app">
    <h1>Todo App</h1>

    <form onSubmit={(e)=>{
     tasksubmit(e)
    }} className="input-section">
      <input value={task} onChange={(e)=>{
        setTask(e.target.value)
      }} type="text" placeholder="Enter your task..." />
      <button>Add</button>
    </form>

    <div className="todo-list">
  {result.map((item,idx)=>{
    return <div key={idx } className="todo-item">
        <p>{item}</p>
        <button onClick={()=>{deletetask(idx)}} className="delete-btn">Delete</button>
      </div>
  })}

      
    </div>

  </div>
</div>
    </>
  )
}

export default App
