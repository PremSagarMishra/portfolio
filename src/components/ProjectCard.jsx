import React from "react";
import TechStack from "./TechStack";
import "./Style.css";

const ProjectCard = (props) => {
  const ImageComponent = props.img;
  let content = String(props.content);
  let subhead=String(props.heading)
  if (subhead.length > 20) {
    subhead = subhead.substring(0, 20) + "...";
  } else {
    content = content;
  }


  // Check if content length is greater than 50 and truncate it if necessary
  if (content.length > 90) {
    content = content.substring(0, 90) + "...";
  } else {
    content = content;
  }

  const handleClick=()=>{
    alert("Hii")
  }

  return (
    <div className="projectcard">
      {/* If img is a component, render it; otherwise, assume it's a path and use an img tag */}
      {typeof ImageComponent === "function" ? (
        <ImageComponent className="image" />
      ) : (
        <img className="image" src={ImageComponent} alt={props.heading} />
      )}
      <p className="sub-head">{subhead}</p>
      <p className="content">{content}</p> {/* Display the truncated content */}
      
      <button style={{fontSize:"16px"}} onClick={handleClick} className="contact-me">Learn More</button>
    </div>

  );
};

export default ProjectCard;
