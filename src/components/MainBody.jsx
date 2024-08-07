import React from 'react'
import Home from "../page/Home"
const MainBody = () => {
  return (
    <div className='body'>
        <div style={{position:"relative",top:"0%",left:"0%"}}>
        <div style={{height:"21px",background:"var(--main-color)",width:"260px"}}></div>
        <div style={{height:"260px",background:"var(--main-color)",width:"21px"}}></div>
        </div>
        {/* Here complete Components will come */}
        <div className='body2'>
           <Home />
        </div>

        <div style={{position:"relative",rotate:"180deg"}}>
        <div style={{height:"21px",background:"var(--main-color)",width:"260px"}}></div>
        <div style={{height:"260px",background:"var(--main-color)",width:"21px"}}></div>
        </div>
    </div>
  )
}

export default MainBody