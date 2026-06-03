import {React,useState} from 'react'

const Colorgenrate = (data) => {

    const [color, setColor] = useState("equa")
  return (
    <div className='card' >
        <h1>Color changer</h1>
        <input onChange={data.colorchange}
            type="text" />
    </div>
  )
}

export default Colorgenrate