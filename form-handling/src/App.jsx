
import './App.css'

function App() {
 
  const submithandler=(e)=>{
e.preventDefault();
console.log("form submit");


  }

  return (
    <>
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }} >
        <input type="text" placeholder='Enter your Name..'/>
        <button>Submit</button>
      </form>
      </div>
    </>
  )
}

export default App
