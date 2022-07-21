import { useEffect,useState } from "react";


function App() {
  const [val,setVal]=useState()
  useEffect(()=>{
    fetch(`/.netlify/functions/hello?name=zabi-ullah`)
    .then(res=>res.json())
    .then(obj=>setVal(obj))
  },[])

  return (
    <div >
      <h1> {val && val.message} in React Project Deploying netlify its Live from github </h1>
    </div>
  );
}

export default App;
