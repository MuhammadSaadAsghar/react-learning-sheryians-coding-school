import { useState } from "react";
import "./App.css";

function App() {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")

  const [result, setResult] = useState([])

  
  const submithandler=(e)=>{
    e.preventDefault();
    const newtask = [...result]

    newtask.push({title,details})

    setResult(newtask);
  
    

     setTitle("")
     setDetails("")
  }

    const deletehanlder=(idx)=>{
      const newtask=[...result]

      newtask.splice(idx,1)
      setResult(newtask)
    }

  return (
    <>
      <div className="lg:h-screen w-full lg:flex bg-black text-white">
        <form 
         className="lg:w-1/2 p-8 flex flex-col gap-5 border-b lg:border-b-0 lg:border-r border-gray-700"
         onSubmit={(e)=>{
          submithandler(e);


        }}>
          <h1 className="text-3xl font-bold">Add Notes</h1>
          <input
            type="text"
            className="w-full py-3 px-4 rounded-lg bg-[#1e293b] border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your heading"
            value={title}
            onChange={(e)=>{

              setTitle(e.target.value)
            } 
            }
          />
          <textarea
            className="w-full h-28 py-3 px-4 rounded-lg bg-[#1e293b] border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
            name=""
            id="detail"
            placeholder="write Detail"
            value={details}
            onChange={(e)=>{
            setDetails(e.target.value);
            }}
          ></textarea>
                  <button className="bg-white text-black font-medium py-3 rounded-lg hover:bg-gray-300 transition">
            Submit
          </button>

        </form>
        <div className="p-10 lg:w-1/2 lg:border-l-2 overflow-auto">
          <h1 className="text-3xl font-bold ">Your notes</h1>
          {result.length===0?( <p className="text-gray-400 mt-10">No notes added yet...</p>):(
          <div className="flex flex-wrap gap-5 mt-5 ">
            {result.map((elem,idx)=>{
              return  <div key={idx} className="flex flex-col justify-between bg-white text-black h-52 w-60 rounded-2xl p-3 ">
                <div>
                <h3 className="text-2xl font-bold leading-tight">{elem.title}</h3>
                <p className=" leading-tight font-medium text-gray-700 mt-3">{elem.details}</p>
                </div>
                <div className="flex justify-center">
                  
                  <button onClick={()=>{
                    deletehanlder(idx)
                  }} className="text-xl text-white bg-red-600 px-10  py-2 rounded-xl">Delete</button>
                </div>
              </div>
            })}
           
           
          </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
