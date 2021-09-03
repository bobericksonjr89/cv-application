import React from "react";

class Job extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: this.props.job.company,
      time: this.props.job.time,
      title: this.props.job.title,
      description: this.props.job.description,
      editing: false,
    };
  }

  handleFocus = (e) => {
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

  handleChange = (e) => {
    this.setState({
      [e.target.dataset.category]: e.target.value,
    });
  };

  handleMouseDown = (e) => {
    e.preventDefault();
  };

  render() {
    const editing = this.state.editing;
    let job;
    if (editing) {
      job = (
        <form>
          <input
            onChange={this.handleChange}
            value={this.state.company}
          ></input>
          <input onChange={this.handleChange} value={this.state.time}></input>
          <input onChange={this.handleChange} value={this.state.title}></input>
          <input
            onChange={this.handleChange}
            value={this.state.description}
          ></input>
        </form>
      );
    } else {
      job = (
        <div tabIndex="0">
          <h4
            data-category="company"
            onMouseDown={this.handleMouseDown}
            onFocus={this.handleFocus}
            onClick={this.handleFocus}
          >
            {this.state.company}
          </h4>
          <p
            data-category="time"
            onMouseDown={this.handleMouseDown}
            onFocus={this.handleFocus}
            onClick={this.handleFocus}
          >
            {this.state.time}
          </p>
          <p
            data-category="title"
            onMouseDown={this.handleMouseDown}
            onFocus={this.handleFocus}
            onClick={this.handleFocus}
          >
            {this.state.title}
          </p>
          <p
            data-category="description"
            onMouseDown={this.handleMouseDown}
            onFocus={this.handleFocus}
            onClick={this.handleFocus}
          >
            {this.state.description}
          </p>
        </div>
      );
    }
    return job;
  }
}

export default Job;
