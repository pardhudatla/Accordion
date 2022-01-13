import React, { useState } from "react"
import "./style.css" ;

export default function MyAccordion({question,answer}){
    const [show,setShow]=useState(false)
    return(
        <>
         <div className="main1">
            <p className="ques">{question}</p>
            <p onClick={()=>setShow(!show)}>{show? "▲":"▼"}</p> 
        </div>
        {show? <p className="ans">{answer}</p>:<p></p>}
        
        
    </>
    )
    
}