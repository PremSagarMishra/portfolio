import React from 'react'
import "./Style.css"
const ServiceCard = (props) => {

    const Icon = props.img
  return (
    <div  className='service-card'>
        <div className="top">
            <Icon className="icon" size={25} style={{ fill: 'var(--main-color) !important'  }} />
            <p>{props.heading} </p>
        </div>
        <p className='intro'>
            {props.content}
        </p>

    </div>
  )
}

export default ServiceCard