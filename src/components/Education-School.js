import React from "react";

class Schools extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      institution: this.props.school.institution,
      time: this.props.school.time,
      degree: this.props.school.degree,
      description: this.props.school.description,
      editing: false,
    };
  }

  handleClick = (e) => {
    const category = e.target.dataset.category;
    if (category === "save") {
      this.setState({
        editing: false,
      });
      this.props.saveSchool({
        institution: this.state.institution,
        time: this.state.time,
        degree: this.state.degree,
        description: this.state.description,
        key: this.props.school.key,
      });
    }
    if (category === "delete") {
      this.props.deleteSchool(e.target.dataset.key);
    }
  };

  handleFocus = (e) => {
    this.setState({
      editing: true,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.dataset.category]: e.target.value,
    });
  };

  handleAreaSize = (e) => {
    e.target.parentNode.dataset.replicatedValue = e.target.value;
  };

  render() {
    const editing = this.state.editing;
    let school;
    if (editing) {
      school = (
        <form className="education__form">
          <input
            className="education__institution--input"
            onChange={this.handleChange}
            data-category="institution"
            value={this.state.institution}
            autoFocus
            onFocus={(e) => e.currentTarget.select()}
          />
          <input
            className="education__time--input"
            onChange={this.handleChange}
            data-category="time"
            value={this.state.time}
            onFocus={(e) => e.currentTarget.select()}
          />
          <input
            className="education__degree--input"
            onChange={this.handleChange}
            data-category="degree"
            value={this.state.degree}
            onFocus={(e) => e.currentTarget.select()}
          />
          <div className="education__wrap">
            <textarea
              className="education__description--input"
              onChange={this.handleChange}
              data-category="description"
              value={this.state.description}
              onFocus={(e) => e.currentTarget.select()}
              onInput={this.handleAreaSize}
            ></textarea>
          </div>
          <div className="education__icons">
            <i
              data-key={this.props.school.key}
              data-category="save"
              className="fas fa-check education__save"
              onClick={this.handleClick}
            ></i>
            <i
              data-key={this.props.school.key}
              data-category="delete"
              className="fas fa-trash education__delete"
              onClick={this.handleClick}
            ></i>
          </div>
        </form>
      );
    } else {
      school = (
        <div tabIndex="0" className="education__info">
          <h4
            className="education__institution"
            onFocus={this.handleFocus}
            onClick={this.handleFocus}
          >
            {this.state.institution}
          </h4>
          <p
            className="education__time"
            onFocus={this.handleFocus}
            onClick={this.handleFocus}
          >
            {this.state.time}
          </p>
          <p
            className="education__degree"
            onFocus={this.handleFocus}
            onClick={this.handleFocus}
          >
            {this.state.degree}
          </p>
          <p
            className="education__description"
            onFocus={this.handleFocus}
            onClick={this.handleFocus}
          >
            {this.state.description}
          </p>
        </div>
      );
    }
    return school;
  }
}

export default Schools;
