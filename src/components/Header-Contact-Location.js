import React from "react";

class HeaderContactLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Location",
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
      location: e.target.value,
    });
  };

  render() {
    const editing = this.state.editing;
    let location;
    if (editing) {
      location = (
        <form onSubmit={this.handleBlur} onBlur={this.handleBlur}>
          <input
            onChange={this.handleChange}
            value={this.state.location}
            autoFocus
          ></input>
        </form>
      );
    } else {
      location = (
        <h2
          className="header__contact-item"
          tabIndex="0"
          onFocus={this.handleFocus}
          onClick={this.handleFocus}
        >
          {this.state.location}
        </h2>
      );
    }
    return <div>{location}</div>;
  }
}

export default HeaderContactLocation;
