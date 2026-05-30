import { useState,useEffect } from "react";
function Clock(){
    const [time,setTime]=useState(new Date().toLocaleTimeString());
    const [show,setshow]=useState(true);
     
    useEffect(()=>{
        setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
    },1000);
    },[]);

    return(
        <>  
        <button onClick={()=>setshow(!show)}>{show ? 'Hide' : 'Show' }</button>
        {show && <h1 >{time}</h1>}
        </>
    )
}
export default Clock;