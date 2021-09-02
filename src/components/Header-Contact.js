import React from "react";
import uniqid from "uniqid";
import HeaderContactEmail from "./Header-Contact-Email";
import HeaderContactPhone from "./Header-Contact-Phone";
import HeaderContactLocation from "./Header-Contact-Location";
import HeaderContactLink from "./Header-Contact-Link";

class HeaderContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          text: "Link",
          key: uniqid(),
        },
      ],
    };
  }

  handleClick = () => {
    this.setState({
      links: this.state.links.concat([{ text: "Link", key: uniqid() }]),
    });
  };

  deleteLink = (e) => {
    const linkID = e.target.dataset.id;
    const updatedLinks = this.state.links.filter((link) => link.key !== linkID);
    this.setState({
      links: updatedLinks,
    });
  };

  render() {
    const links = this.state.links.map((link) => {
      return (
        <HeaderContactLink
          key={link.key}
          link={link}
          deleteLink={this.deleteLink}
        />
      );
    });
    return (
      <div className="header__contact">
        <div className="header__main-contact">
          <HeaderContactLocation />
          <HeaderContactEmail />
          <HeaderContactPhone />
        </div>
        <div className="header__links">
          <h2 className="header__links-header" onClick={this.handleClick}>
            Links:
          </h2>
          {links}
        </div>
      </div>
    );
  }
}

export default HeaderContact;
