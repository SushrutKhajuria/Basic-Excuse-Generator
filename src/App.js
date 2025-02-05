import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";


function App(){
 const [excuseGenerator , setExcuseGenerator] = useState("");

const fetchExcuseGenerator = (excuse) =>{

  Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
  .then((res)=>{
    console.log(res.data);
    setExcuseGenerator(res.data[0].excuse);
   })

}

 useEffect( ()=>{
 fetchExcuseGenerator("family");
  
  },[])

  return(
    <div className="App">
     <button onClick={()=> fetchExcuseGenerator("family")}> Family</button>
     <button onClick={()=> fetchExcuseGenerator("party")}> Party</button>
     <button onClick={()=> fetchExcuseGenerator("office")}> Office</button>
     <h1> {excuseGenerator}</h1>
     
    </div>
    )
    
}


export default App;