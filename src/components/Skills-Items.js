import React from "react";

class Skill extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
      editing: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleFocus = () => {
    this.setState({
      editing: true,
    });
  };

  handleBlur = (e) => {
    e.preventDefault();
    this.setState({
      editing: false,
    });
  };

  handleMouseDown = (e) => {
    e.preventDefault();
  };

  render() {
    const editing = this.state.editing;
    let skill;
    if (editing) {
      skill = (
        <form onSubmit={this.handleBlur} onBlur={this.handleBlur}>
          <input
            className="skills__input"
            onChange={this.handleChange}
            type="text"
            value={this.state.text}
            autoFocus
            onFocus={(e) => e.currentTarget.select()}
          />
          <i
            data-id={this.props.id}
            onMouseDown={this.handleMouseDown}
            onClick={this.props.deleteSkill}
            className="fas fa-trash skills__delete"
          ></i>
        </form>
      );
    } else {
      skill = (
        <div>
          <li
            tabIndex="0"
            className="skills__text"
            onFocus={this.handleFocus}
            onClick={this.handleFocus}
          >
            {this.state.text}
          </li>
        </div>
      );
    }
    return skill;
  }
}

export default Skill;
