import React from "react";
import "../styles/Summary.css";

class Summary extends React.Component {
  constructor() {
    super();

    this.state = {
      summary: "Summary",
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
      summary: e.target.value,
    });
  };

  handleAreaSize = (e) => {
    console.log(this);
    e.target.parentNode.dataset.replicatedValue = e.target.value;
  };

  render() {
    const editing = this.state.editing;
    let summary;
    if (editing) {
      summary = (
        <form onSubmit={this.handleBlur} onBlur={this.handleBlur}>
          <div className="summary__wrap">
            <textarea
              className="summary--input"
              onChange={this.handleChange}
              value={this.state.summary}
              autoFocus
              onFocus={(e) => e.currentTarget.select()}
              onInput={this.handleAreaSize}
            ></textarea>
          </div>
        </form>
      );
    } else {
      summary = (
        <h2
          className="summary"
          tabIndex="0"
          onFocus={this.handleFocus}
          onClick={this.handleFocus}
        >
          {this.state.summary}
        </h2>
      );
    }
    return <div>{summary}</div>;
  }
}

export default Summary;
