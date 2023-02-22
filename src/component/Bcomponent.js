import React, { useState } from 'react'
import Dcomponent from './Dcomponent'

const Bcomponent = (props) => {


  const [state,setState]=useState("");


  
  const fun=(event)=>{
    console.log(event.target.value);
    setState(event.target.value);
    props.func(event.target.value)

  }




  return (
    <div className="bcomp">
    Bcomponent 
   
    <input style={{width:"300px"}} onChange={fun} placeholder="here we also passing data from child to parent"/>
    <p>{state}</p>
    <Dcomponent/>

    </div>

   
  )
}

export default Bcomponent