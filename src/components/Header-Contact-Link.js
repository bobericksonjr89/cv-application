import React from "react";

class HeaderContactLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.link.text,
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
      text: e.target.value,
    });
  };

  handleMouseDown = (e) => {
    e.preventDefault();
  };

  render() {
    const editing = this.state.editing;
    let link;
    if (editing) {
      link = (
        <form onSubmit={this.handleBlur} onBlur={this.handleBlur}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
            autoFocus
            onFocus={(e) => e.currentTarget.select()}
          ></input>
          <i
            data-id={this.props.link.key}
            onMouseDown={this.handleMouseDown}
            onClick={this.props.deleteLink}
            className="fas fa-trash"
          ></i>
        </form>
      );
    } else {
      link = (
        <h2
          className="header__links-item"
          tabIndex="0"
          onMouseDown={this.handleMouseDown}
          onFocus={this.handleFocus}
          onClick={this.handleFocus}
        >
          {this.state.text}
        </h2>
      );
    }
    return <div>{link}</div>;
  }
}

export default HeaderContactLink;
