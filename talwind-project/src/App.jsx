
import './App.css'
import Section1 from './components/Section1/Section1'

function App() {

  const users=[
    {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
      intro:"",
      color:"Royalblue",
      tag:"Satisfied"
    },
    {
      img:"https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmclMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
      intro:"",
      color:"lightgreen",
      tag:"Underserved"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      intro:"",
      color:"orange",
      tag:"UnderBanked"
    },
    {
      img:"https://images.unsplash.com/photo-1603575448360-153f093fd0b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmclMjBvbiUyMGxhcHRvcCUyMHByb2dyYW1pbmclMjBib3l8ZW58MHx8MHx8fDA%3D",
      intro:"",
      color:"aqua",
      tag:"Satisfied"
    },
  ]


  return (
    <>
    <div>
     <Section1 users={users}/>
     </div>
    </>
  )
}

export default App
