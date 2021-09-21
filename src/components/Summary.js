import React, { useState } from "react";
import "../styles/Summary.css";

const Summary = () => {
  const [summary, setSummary] = useState("Summary");
  const [isEditing, setIsEditing] = useState(false);

  const handleFocus = () => {
    setIsEditing(!isEditing);
  };

  const handleBlur = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setSummary(e.target.value);
  };

  const handleAreaSize = (e) => {
    e.target.parentNode.dataset.replicatedValue = e.target.value;
  };

  if (isEditing) {
    return (
      <div>
        <form onSubmit={handleBlur} onBlur={handleBlur}>
          <div className="summary__wrap">
            <textarea
              className="summary--input"
              onChange={handleChange}
              value={summary}
              autoFocus
              onFocus={(e) => e.currentTarget.select()}
              onInput={handleAreaSize}
            ></textarea>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h2
          className="summary"
          tabIndex="0"
          onFocus={handleFocus}
          onClick={handleFocus}
        >
          {summary}
        </h2>
      </div>
    );
  }
};

export default Summary;
