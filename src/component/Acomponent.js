import React from 'react'
import Ecomponent from './Ecomponent'

const Acomponent = (props) => {

  
  
  return (
  

      <div className='acomp'>
        HIII
           <p className="para">Im A-component</p>
          <p>{props.psyk}</p>
          <Ecomponent name={props.name}  rp={props.psyk}/>
      </div>


  )
}

export default Acomponent