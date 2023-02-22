import React from 'react'

const Fcompo = (props) => {
  return (
    <div className='fcompo'>
     <div><img src={props.isrc} alt='Loading'/></div>
     <div><p>Brand -<span>  {props.brand} </span></p></div>
     <div><p>Model -<span>{props.model}</span></p></div>
     <div><p>Rate - <span> <strike id="strike">{props.rate}</strike></span></p></div>
     <div><p>Offer - <span > {props.offer} </span></p></div>
     <div><p>OS -<span>{props.os}</span></p></div>
    </div>
  )
}

export default Fcompo


