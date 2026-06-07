import React, { useState } from 'react'

const Calculater = () => {

    const [value, setValue] = useState("")

   const hanldeClick=(val)=>{
    setValue(value+val)
   }

   const clear=()=> setValue("");

   const calculate=()=>{
    setValue(eval(value))
   }
 
  return (
    <div>
        <div class="calculator">
  <input type="text" class="display" value={value} />

  <div class="buttons">
    <button onClick={()=>hanldeClick("7")}>7</button>
    <button onClick={()=>hanldeClick("8")}>8</button>
    <button onClick={()=>hanldeClick("9")}>9</button>
    <button onClick={()=>hanldeClick("/")}>/</button>

    <button onClick={()=>hanldeClick("4")}>4</button>
    <button onClick={()=>hanldeClick("5")}>5</button>
    <button onClick={()=>hanldeClick("6")}>6</button>
    <button onClick={()=>hanldeClick("*")}>*</button>

    <button onClick={()=>hanldeClick("1")}>1</button>
    <button onClick={()=>hanldeClick("2")}>2</button>
    <button onClick={()=>hanldeClick("3")}>3</button>
    <button onClick={()=>hanldeClick("-")}>-</button>

    <button className='cal' onClick={()=>hanldeClick("0")}>0</button>
    <button className='cal' onClick={clear}>C</button>
    <button className='cal' onClick={calculate}>=</button>
    <button className='cal' onClick={()=>hanldeClick("+")}>+</button>
  </div>
</div>
    </div>
  )
}

export default Calculater