import React from "react";

class HeaderTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Title",
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
      title: e.target.value,
    });
  };

  render() {
    const editing = this.state.editing;
    let title;
    if (editing) {
      title = (
        <form onSubmit={this.handleBlur} onBlur={this.handleBlur}>
          <input
            onChange={this.handleChange}
            value={this.state.title}
            autoFocus
            onFocus={(e) => e.currentTarget.select()}
          ></input>
        </form>
      );
    } else {
      title = (
        <h2
          className="header__title"
          tabIndex="0"
          onFocus={this.handleFocus}
          onClick={this.handleFocus}
        >
          {this.state.title}
        </h2>
      );
    }
    return <div>{title}</div>;
  }
}

export default HeaderTitle;
