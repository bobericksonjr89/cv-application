import React, { useState } from "react";

const HeaderContactEmail = () => {
  const [email, setEmail] = useState("Email");
  const [isEditing, setIsEditing] = useState(false);

  const handleFocus = () => {
    setIsEditing(!isEditing);
  };

  const handleBlur = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  if (isEditing) {
    return (
      <div>
        <form onSubmit={handleBlur} onBlur={handleBlur}>
          <input
            className="header__contact-item--input"
            onChange={handleChange}
            value={email}
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
          className="header__contact-item"
          tabIndex="0"
          onFocus={handleFocus}
          onClick={handleFocus}
        >
          {email}
        </h2>
      </div>
    );
  }
};

export default HeaderContactEmail;
