import React from "react";
import "./Style.css";

const ProjectCard = (props) => {
  const ImageComponent = props.img;
  let content = String(props.content);
  let subhead=String(props.heading)
  let github=String(props.github)
  console.log(github)

  const handleClick=()=>{
    window.location.href=String(github);
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
      
      <button style={{fontSize:"16px"}} onClick={handleClick} className="contact-me">Github</button>
    </div>

  );
};

export default ProjectCard;
