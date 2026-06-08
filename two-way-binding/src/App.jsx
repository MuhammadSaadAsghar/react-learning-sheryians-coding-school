
import { useState } from 'react';
import './App.css'

function App() {

  const [title, setTitle] = useState("")
 
  const submithandler=(e)=>{
e.preventDefault();
console.log("form submit",title);
setTitle("")


  }

  return (
    <>
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }} >
        <input type="text"
        
        placeholder='Enter your Name..'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
          
        }}
        />
        <button>Submit</button>
      </form>
      </div>
    </>
  )
}

export default App
