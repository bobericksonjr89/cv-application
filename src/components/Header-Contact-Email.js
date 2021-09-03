import React from "react";

class HeaderContactEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "Email",
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
      email: e.target.value,
    });
  };

  render() {
    const editing = this.state.editing;
    let email;
    if (editing) {
      email = (
        <form onSubmit={this.handleBlur} onBlur={this.handleBlur}>
          <input
            className="header__contact-item--input"
            onChange={this.handleChange}
            value={this.state.email}
            autoFocus
            onFocus={(e) => e.currentTarget.select()}
          ></input>
        </form>
      );
    } else {
      email = (
        <h2
          className="header__contact-item"
          tabIndex="0"
          onFocus={this.handleFocus}
          onClick={this.handleFocus}
        >
          {this.state.email}
        </h2>
      );
    }
    return <div>{email}</div>;
  }
}

export default HeaderContactEmail;
