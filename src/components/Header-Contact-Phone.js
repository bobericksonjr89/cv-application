import React from "react";

class HeaderContactPhone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "Phone",
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
      phone: e.target.value,
    });
  };

  render() {
    const editing = this.state.editing;
    let phone;
    if (editing) {
      phone = (
        <form onSubmit={this.handleBlur} onBlur={this.handleBlur}>
          <input
            onChange={this.handleChange}
            value={this.state.phone}
            autoFocus
          ></input>
        </form>
      );
    } else {
      phone = (
        <h2
          className="header__contact-item"
          tabIndex="0"
          onFocus={this.handleFocus}
          onClick={this.handleFocus}
        >
          {this.state.phone}
        </h2>
      );
    }
    return <div>{phone}</div>;
  }
}

export default HeaderContactPhone;
