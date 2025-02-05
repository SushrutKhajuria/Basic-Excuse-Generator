import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";


function App(){
 const [excuseGenerator , setExcuseGenerator] = useState("");

const fetchExcuseGenerator = () =>{

  Axios.get("https://excuser-three.vercel.app/v1/excuse/")
  .then((res)=>{
    console.log(res.data);
    setExcuseGenerator(res.data[0].excuse);
   })

}

 useEffect( ()=>{
  Axios.get("https://excuser-three.vercel.app/v1/excuse/")
  .then((res)=>{
    console.log(res.data);
    setExcuseGenerator(res.data[0].excuse);
   })
  
  },[] )

  return(
    <div className="App">
     <button onClick={fetchExcuseGenerator}> EXCUSEEEEEEE</button>
     <p> {excuseGenerator}</p>
    </div>
    )
    
}


export default App;