import React from 'react'
import Cardcontent from './Cardcontent'

const Rightcard = (props) => {
  return (
    <>   
    <div className='h-full w-72 shadow-2xs  relative shrink-0 overflow-hidden rounded-3xl'>
        <img className='w-full h-full object-cover ' src={props.image} alt="" />
        <Cardcontent id={props.id} color={props.color} tag={props.tag} image={props.image}/>
        
    </div>
  
    </>
 
  )
}

export default Rightcard