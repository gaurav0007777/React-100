import { useEffect } from "react";
import { useState } from "react";

function App(){
const [picture, setPicture] = useState([]);
const [name,setName] = useState("");


  useEffect(()=>{
    async function getPicture(){
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        setPicture(data);
      }
      getPicture();
  },[]);

  function handlechange(e){
    setName(e.target.value.toUpperCase());
  }

  return (
    <>
      <h1>watch picture</h1>
      <input type="text" onChange={handlechange} value={name}/>
      <br />
      <br />
<br />
      
      <div style={{ display: 'flex', flexWrap: 'wrap' ,justifyContent:"center",alignItems:"center" }} >
        {
          picture.map((item)=>(
            <img src={item.avatar_url} height={"150px"} width={"150px"} key={item.id} />
          ))
        }

      </div>
     
    </>
  )
}
export default App;