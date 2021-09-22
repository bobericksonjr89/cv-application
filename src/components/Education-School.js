import React, { useState } from "react";

const Schools = (props) => {
  const [institution, setInstitution] = useState(props.school.institution);
  const [time, setTime] = useState(props.school.time);
  const [degree, setDegree] = useState(props.school.degree);
  const [description, setDescription] = useState(props.school.description);
  const [isEditing, setIsEditing] = useState(false);

  const saveSchool = () => {
    setIsEditing(false);
    props.saveSchool({
      institution: institution,
      time: time,
      degree: degree,
      description: description,
      key: props.school.key,
    });
  };

  const deleteSchool = (e) => {
    props.deleteSchool(e.target.dataset.key);
  };

  const handleFocus = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const category = e.target.dataset.category;
    const value = e.target.value;

    if (category === "institution") {
      setInstitution(value);
    }

    if (category === "time") {
      setTime(value);
    }

    if (category === "degree") {
      setDegree(value);
    }

    if (category === "description") {
      setDescription(value);
    }
  };

  const handleAreaSize = (e) => {
    e.target.parentNode.dataset.replicatedValue = e.target.value;
  };

  if (isEditing) {
    return (
      <form className="education__form">
        <input
          className="education__institution--input"
          onChange={handleChange}
          data-category="institution"
          value={institution}
          autoFocus
          onFocus={(e) => e.currentTarget.select()}
        />
        <input
          className="education__time--input"
          onChange={handleChange}
          data-category="time"
          value={time}
          onFocus={(e) => e.currentTarget.select()}
        />
        <input
          className="education__degree--input"
          onChange={handleChange}
          data-category="degree"
          value={degree}
          onFocus={(e) => e.currentTarget.select()}
        />
        <div className="education__wrap">
          <textarea
            className="education__description--input"
            onChange={handleChange}
            data-category="description"
            value={description}
            onFocus={(e) => e.currentTarget.select()}
            onInput={handleAreaSize}
          ></textarea>
        </div>
        <div className="education__icons">
          <i
            data-key={props.school.key}
            data-category="save"
            className="fas fa-check education__save"
            onClick={saveSchool}
          ></i>
          <i
            data-key={props.school.key}
            data-category="delete"
            className="fas fa-trash education__delete"
            onClick={deleteSchool}
          ></i>
        </div>
      </form>
    );
  } else {
    return (
      <div tabIndex="0" className="education__info">
        <h4
          className="education__institution"
          onFocus={handleFocus}
          onClick={handleFocus}
        >
          {institution}
        </h4>
        <p
          className="education__time"
          onFocus={handleFocus}
          onClick={handleFocus}
        >
          {time}
        </p>
        <p
          className="education__degree"
          onFocus={handleFocus}
          onClick={handleFocus}
        >
          {degree}
        </p>
        <p
          className="education__description"
          onFocus={handleFocus}
          onClick={handleFocus}
        >
          {description}
        </p>
      </div>
    );
  }
};

export default Schools;
