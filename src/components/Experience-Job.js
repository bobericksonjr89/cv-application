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

  handleClick = (e) => {
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
  };

  handleFocus = () => {
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
    let job;
    if (editing) {
      job = (
        <form className="experience__form">
          <input
            className="experience__company--input"
            onChange={this.handleChange}
            data-category="company"
            value={this.state.company}
            autoFocus
            onFocus={(e) => e.currentTarget.select()}
          />
          <input
            className="experience__time--input"
            onChange={this.handleChange}
            data-category="time"
            value={this.state.time}
            onFocus={(e) => e.currentTarget.select()}
          />
          <input
            className="experience__title--input"
            onChange={this.handleChange}
            data-category="title"
            value={this.state.title}
            onFocus={(e) => e.currentTarget.select()}
          />
          <div className="experience__wrap">
            <textarea
              className="experience__description--input"
              onChange={this.handleChange}
              data-category="description"
              value={this.state.description}
              onFocus={(e) => e.currentTarget.select()}
              onInput={this.handleAreaSize}
            ></textarea>
          </div>
          <div className="experience__icons">
            <i
              data-key={this.props.job.key}
              data-category="save"
              className="fas fa-check experience__save"
              onClick={this.handleClick}
            ></i>
            <i
              data-key={this.props.job.key}
              data-category="delete"
              className="fas fa-trash experience__delete"
              onClick={this.handleClick}
            ></i>
          </div>
        </form>
      );
    } else {
      job = (
        <div tabIndex="0" className="experience__info">
          <h4
            className="experience__company"
            onFocus={this.handleFocus}
            onClick={this.handleFocus}
          >
            {this.state.company}
          </h4>
          <p
            className="experience__time"
            onFocus={this.handleFocus}
            onClick={this.handleFocus}
          >
            {this.state.time}
          </p>
          <p
            className="experience__title"
            onFocus={this.handleFocus}
            onClick={this.handleFocus}
          >
            {this.state.title}
          </p>
          <p
            className="experience__description"
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
