import React from 'react'
import Home from "../page/Home"
import About from "../page/About"
import Skills from "../page/Skills"
import Services from "../page/Services"
import Contact from "../page/Contact"
import Projects from "../page/Projects"
import { BrowserRouter as Router,Routes,Route ,Navigate} from "react-router-dom"

const MainBody = () => {
  return (

    <Router>
    <div className='body'>
        <div style={{position:"relative",top:"0%",left:"0%"}}>
        <div style={{height:"21px",background:"var(--main-color)",width:"260px"}}></div>
        <div style={{height:"260px",background:"var(--main-color)",width:"21px"}}></div>
        </div>
        {/* Here complete Components will come */}
        <div className='body2'>
           <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />}/>
           <Route path="/skills" element={<Skills />}/>
           <Route path="/services" element={<Services />}/>
           <Route path="/contact" element={<Contact />}/>
           <Route path="/projects" element={<Projects />}/>
           </Routes>
        </div>

        <div style={{position:"relative",rotate:"180deg"}}>
        <div style={{height:"21px",background:"var(--main-color)",width:"260px"}}></div>
        <div style={{height:"260px",background:"var(--main-color)",width:"21px"}}></div>
        </div>
        
    </div>
    </Router>
  )
}

export default MainBody