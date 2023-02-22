import React from 'react'

const Ecomponent = (props) => {
  return (
    <div id="ecomp">
      Im from E-component
      <p>{props.rp}</p>
      <p>{props.name}</p>
    </div>
  )
}

export default Ecomponent