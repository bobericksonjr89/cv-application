import React from "react";

class HeaderName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Name",
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
      name: e.target.value,
    });
  };

  render() {
    const editing = this.state.editing;
    let name;
    if (editing) {
      name = (
        <form onSubmit={this.handleBlur} onBlur={this.handleBlur}>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            autoFocus
            onFocus={(e) => e.currentTarget.select()}
          ></input>
        </form>
      );
    } else {
      name = (
        <h1
          className="header__name"
          tabIndex="0"
          onFocus={this.handleFocus}
          onClick={this.handleFocus}
        >
          {this.state.name}
        </h1>
      );
    }
    return <div>{name}</div>;
  }
}

export default HeaderName;
