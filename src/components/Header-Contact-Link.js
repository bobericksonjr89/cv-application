import React, { useState } from "react";

const HeaderContactLink = (props) => {
  const [text, setText] = useState(props.link.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleFocus = () => {
    setIsEditing(!isEditing);
  };

  const handleBlur = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
  };

  if (isEditing) {
    return (
      <div>
        <form onSubmit={handleBlur} onBlur={handleBlur}>
          <input
            className="header__links-item--input"
            onChange={handleChange}
            value={text}
            autoFocus
            onFocus={(e) => e.currentTarget.select()}
          ></input>
          <i
            data-id={props.link.key}
            onMouseDown={handleMouseDown}
            onClick={props.deleteLink}
            className="fas fa-trash header__links-delete"
          ></i>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h2
          className="header__links-item"
          tabIndex="0"
          onMouseDown={handleMouseDown}
          onFocus={handleFocus}
          onClick={handleFocus}
        >
          {text}
        </h2>
      </div>
    );
  }
};

export default HeaderContactLink;
