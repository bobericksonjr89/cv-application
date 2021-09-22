import React, { useState } from "react";
import uniqid from "uniqid";
import Skill from "./Skills-Items.js";
import "../styles/Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([
    {
      text: "Text",
      key: uniqid(),
    },
  ]);

  const handleClick = () => {
    setSkills([
      ...skills,
      {
        text: "Text",
        key: uniqid(),
      },
    ]);
  };

  const deleteSkill = (e) => {
    const skillKey = e.target.dataset.id;
    const updatedSkills = skills.filter((skill) => skill.key !== skillKey);

    setSkills(updatedSkills);
  };

  const skillsComponents = skills.map((skill) => (
    <Skill
      text={skill.text}
      id={skill.key}
      key={skill.key}
      deleteSkill={deleteSkill}
    />
  ));
  return (
    <div>
      <h3 className="skills__header" onClick={handleClick}>
        Skills
      </h3>
      <ul>{skillsComponents}</ul>
    </div>
  );
};

export default Skills;
