import React from "react";
import School from "./Education-School.js";
import uniqid from "uniqid";
import "../styles/Education.css";

class Education extends React.Component {
  constructor() {
    super();

    this.state = {
      schools: [
        {
          institution: "Institution",
          time: "Time",
          degree: "Degree",
          description: "Description",
          key: uniqid(),
        },
      ],
    };
  }

  handleClick = () => {
    this.setState({
      schools: this.state.schools.concat([
        {
          institution: "Institution",
          time: "Time",
          degree: "Degree",
          description: "Description",
          key: uniqid(),
        },
      ]),
    });
  };

  saveSchool = (school) => {
    const updatedschools = this.state.schools.map((oldschool) => {
      if (oldschool.key === school.key) {
        oldschool = school;
      }
      return oldschool;
    });
    this.setState({
      schools: updatedschools,
    });
  };

  deleteSchool = (schoolKey) => {
    const updatedschools = this.state.schools.filter(
      (school) => school.key !== schoolKey
    );
    this.setState({
      schools: updatedschools,
    });
  };

  render() {
    const schools = this.state.schools.map((school) => (
      <School
        key={school.key}
        school={school}
        saveSchool={this.saveSchool}
        deleteSchool={this.deleteSchool}
      />
    ));
    return (
      <div>
        <h3 className="education__header" onClick={this.handleClick}>
          Education
        </h3>
        {schools}
      </div>
    );
  }
}

export default Education;
