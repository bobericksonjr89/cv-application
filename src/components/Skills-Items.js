import React, { useState } from "react";

const Skill = (props) => {
  const [text, setText] = useState(props.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleFocus = () => {
    setIsEditing(!isEditing);
  };

  const handleBlur = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
  };

  if (isEditing) {
    return (
      <form onSubmit={handleBlur} onBlur={handleBlur}>
        <input
          className="skills__input"
          onChange={handleChange}
          type="text"
          value={text}
          autoFocus
          onFocus={(e) => e.currentTarget.select()}
        />
        <i
          data-id={props.id}
          onMouseDown={handleMouseDown}
          onClick={props.deleteSkill}
          className="fas fa-trash skills__delete"
        ></i>
      </form>
    );
  } else {
    return (
      <div>
        <li
          tabIndex="0"
          className="skills__text"
          onFocus={handleFocus}
          onClick={handleFocus}
        >
          {text}
        </li>
      </div>
    );
  }
};

export default Skill;
