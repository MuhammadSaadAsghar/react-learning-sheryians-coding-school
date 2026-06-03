import { useState} from "react";
import './App.css'
import Colorgenrate from './components/Colorgenrate'

function App() {

 const [color, setColor] = useState("")

 const colorchanger=(input)=>{
  const value=input.target.value;
  setColor(value)
  document.body.style.backgroundColor=value;
 }

  return (
    <>
    <div id='parent'>
      <Colorgenrate colorchange={colorchanger}/>
    </div>
    </>
  )
}

export default App
