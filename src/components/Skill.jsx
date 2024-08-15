import React from 'react'

const Skill = (props) => {
    const Icon=props.icon
  return (
    <div className='skill'>
        <Icon  className="icon" fill="var(--main-color)"/>
        <p>{props.heading}</p>
    </div>
  )
}

export default Skill