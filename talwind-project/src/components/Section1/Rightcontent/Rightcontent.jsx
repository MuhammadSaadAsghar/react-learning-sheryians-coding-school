import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div id="right" className='w-3/4 flex gap-5 overflow-x-auto h-full p-6 flex-nowrap '>
      {props.users.map(function(elem, index){

      return  <Rightcard key={index} id={index} image={elem.img} color={elem.color} tag={elem.tag}/>
      })}
    </div>
  )
}

export default Rightcontent