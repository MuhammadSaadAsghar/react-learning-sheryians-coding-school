import React from 'react'
import Leftcontent from './leftcontent/Leftcontent'
import Rightcontent from './Rightcontent/Rightcontent'

const Page1content = (props) => {
  return (
    <div className='h-[90vh] w-full px-18 pb-10  flex items-center gap-10 '>
        <Leftcontent/>
        <Rightcontent users={props.users}/>
    </div>
  )
}

export default Page1content