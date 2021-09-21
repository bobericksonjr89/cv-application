import React, { useState } from "react";

const HeaderTitle = () => {
  const [title, setTitle] = useState("Title");
  const [isEditing, setIsEditing] = useState(false);

  const handleFocus = () => {
    setIsEditing(!isEditing);
  };

  const handleBlur = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  if (isEditing) {
    return (
      <div>
        <form onSubmit={handleBlur} onBlur={handleBlur}>
          <input
            className="header__title--input"
            onChange={handleChange}
            value={title}
            autoFocus
            onFocus={(e) => e.currentTarget.select()}
          ></input>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h2
          className="header__title"
          tabIndex="0"
          onFocus={handleFocus}
          onClick={handleFocus}
        >
          {title}
        </h2>
      </div>
    );
  }
};

export default HeaderTitle;
