import React from "react";
import "./Style.css";
import { list } from "./Skill-List";
import Skill from "../components/Skill";

const Skills = () => {
  return (
    <div className="container">
      <div className="heading">
        <h1>My Skills</h1>
        <div></div>
      </div>
      <p className="sub-head">
        I have a diverse set of skills that allow me to deliver high-quality digital products.
      </p>
      <div className="skills">
        {list.map((skill, index) => (
          <Skill key={index} icon={skill.icon} heading={skill.heading} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
