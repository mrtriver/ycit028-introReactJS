import { useEffect, useState } from "react";
import "./App.css";


function App(){

const [serverData , setServerData ] = useState(null);

useEffect(() => {
    
fetch("https://randomuser.me/api/?results=1")
.then((response)=>response.json())
.then((data) => {
console.log("data", data)
setServerData(data) 
})
} , [])

if(!serverData){                                         //*******Bouncer: if serverData is not present return null
    return null
  }

  const firstUser = serverData.results[0] 
 
  

return (
<div>
    <header>
    <h2>Random User Profile Viewer</h2>
    </header>
 
</div>




)

}

export default App;