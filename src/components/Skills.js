import React from "react";
import uniqid from "uniqid";
import Skill from "./Skills-Items.js";
import "../styles/Skills.css";

class Skills extends React.Component {
  constructor() {
    super();

    this.state = {
      skills: [
        {
          text: "Text",
          key: uniqid(),
        },
      ],
    };
  }

  handleClick = () => {
    this.setState({
      skills: this.state.skills.concat({
        text: "Text",
        key: uniqid(),
      }),
    });
  };

  deleteSkill = (e) => {
    const skillKey = e.target.dataset.id;
    const updatedSkills = this.state.skills.filter(
      (skill) => skill.key !== skillKey
    );

    this.setState({
      skills: updatedSkills,
    });
  };

  render() {
    const skills = this.state.skills.map((skill) => (
      <Skill
        text={skill.text}
        id={skill.key}
        key={skill.key}
        deleteSkill={this.deleteSkill}
      />
    ));
    return (
      <div>
        <h3 className="skills__header" onClick={this.handleClick}>
          Skills
        </h3>
        <ul>{skills}</ul>
      </div>
    );
  }
}

export default Skills;
