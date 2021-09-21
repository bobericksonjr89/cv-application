import React, { useState } from "react";

const Job = (props) => {
  const [company, setCompany] = useState(props.job.company);
  const [time, setTime] = useState(props.job.time);
  const [title, setTitle] = useState(props.job.title);
  const [description, setDescription] = useState(props.job.description);
  const [isEditing, setIsEditing] = useState(false);

  /*   const handleClick = (e) => {
    const category = e.target.dataset.category;
    if (category === "save") {
      this.setState({
        editing: false,
      });
      this.props.saveJob({
        company: this.state.company,
        time: this.state.time,
        title: this.state.title,
        description: this.state.description,
        key: this.props.job.key,
      });
    }
    if (category === "delete") {
      this.props.deleteJob(e.target.dataset.key);
    }
  }; */

  const saveJob = () => {
    setIsEditing(false);
    props.saveJob({
      company: company,
      time: time,
      title: title,
      description: description,
      key: props.job.key,
    });
  };

  const passToDeleteJob = (e) => {
    props.deleteJob(e.target.dataset.key);
  };

  const handleFocus = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const category = e.target.dataset.category;
    const value = e.target.value;

    if (category === "company") {
      setCompany(value);
    }

    if (category === "time") {
      setTime(value);
    }

    if (category === "title") {
      setTitle(value);
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
      <form className="experience__form">
        <input
          className="experience__company--input"
          onChange={handleChange}
          data-category="company"
          value={company}
          autoFocus
          onFocus={(e) => e.currentTarget.select()}
        />
        <input
          className="experience__time--input"
          onChange={handleChange}
          data-category="time"
          value={time}
          onFocus={(e) => e.currentTarget.select()}
        />
        <input
          className="experience__title--input"
          onChange={handleChange}
          data-category="title"
          value={title}
          onFocus={(e) => e.currentTarget.select()}
        />
        <div className="experience__wrap">
          <textarea
            className="experience__description--input"
            onChange={handleChange}
            data-category="description"
            value={description}
            onFocus={(e) => e.currentTarget.select()}
            onInput={handleAreaSize}
          ></textarea>
        </div>
        <div className="experience__icons">
          <i
            data-key={props.job.key}
            data-category="save"
            className="fas fa-check experience__save"
            onClick={saveJob}
          ></i>
          <i
            data-key={props.job.key}
            data-category="delete"
            className="fas fa-trash experience__delete"
            onClick={passToDeleteJob}
          ></i>
        </div>
      </form>
    );
  } else {
    return (
      <div tabIndex="0" className="experience__info">
        <h4
          className="experience__company"
          onFocus={handleFocus}
          onClick={handleFocus}
        >
          {company}
        </h4>
        <p
          className="experience__time"
          onFocus={handleFocus}
          onClick={handleFocus}
        >
          {time}
        </p>
        <p
          className="experience__title"
          onFocus={handleFocus}
          onClick={handleFocus}
        >
          {title}
        </p>
        <p
          className="experience__description"
          onFocus={handleFocus}
          onClick={handleFocus}
        >
          {description}
        </p>
      </div>
    );
  }
};

export default Job;
