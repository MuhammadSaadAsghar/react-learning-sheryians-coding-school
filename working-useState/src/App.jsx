import { useState } from 'react'

import './App.css'

function App() {
  const [num, setNum] = useState(0)
const increaseNum=()=>{
setNum(num+1)
}
const decreaseNum=()=>{
setNum(num-1)
}
  return (
    <>
    <div>
      <h1> {num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum} id='btn'>decrease</button>
    </div>
    </>
  )
}

export default App
