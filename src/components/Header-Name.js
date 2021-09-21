import React, { useState } from "react";

const HeaderName = () => {
  const [name, setName] = useState("Name");
  const [isEditing, setIsEditing] = useState(false);

  const handleFocus = () => {
    setIsEditing(!isEditing);
  };

  const handleBlur = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  if (isEditing) {
    return (
      <div>
        <form onSubmit={handleBlur} onBlur={handleBlur}>
          <input
            className="header__name--input"
            onChange={handleChange}
            value={name}
            autoFocus
            onFocus={(e) => e.currentTarget.select()}
          ></input>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h1
          className="header__name"
          tabIndex="0"
          onFocus={handleFocus}
          onClick={handleFocus}
        >
          {name}
        </h1>
      </div>
    );
  }
};

/* class HeaderName extends React.Component {
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
            className="header__name--input"
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
} */

export default HeaderName;
