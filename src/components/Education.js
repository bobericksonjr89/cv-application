import React, { useState } from "react";
import School from "./Education-School.js";
import uniqid from "uniqid";
import "../styles/Education.css";

const Education = () => {
  const [schools, setSchools] = useState([
    {
      institution: "Institution",
      time: "Time",
      degree: "Degree",
      description: "Description",
      key: uniqid(),
    },
  ]);

  const handleClick = () => {
    setSchools([
      ...schools,
      {
        institution: "Institution",
        time: "Time",
        degree: "Degree",
        description: "Description",
        key: uniqid(),
      },
    ]);
  };

  const saveSchool = (school) => {
    const updatedSchools = schools.map((oldschool) => {
      if (oldschool.key === school.key) {
        oldschool = school;
      }
      return oldschool;
    });
    setSchools(updatedSchools);
  };

  const deleteSchool = (schoolKey) => {
    const updatedSchools = schools.filter((school) => school.key !== schoolKey);
    setSchools(updatedSchools);
  };

  const schoolsComponents = schools.map((school) => (
    <School
      key={school.key}
      school={school}
      saveSchool={saveSchool}
      deleteSchool={deleteSchool}
    />
  ));
  return (
    <div>
      <h3 className="education__header" onClick={handleClick}>
        Education
      </h3>
      {schoolsComponents}
    </div>
  );
};

export default Education;
