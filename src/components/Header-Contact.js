import React, { useState } from "react";
import uniqid from "uniqid";
import HeaderContactEmail from "./Header-Contact-Email";
import HeaderContactPhone from "./Header-Contact-Phone";
import HeaderContactLocation from "./Header-Contact-Location";
import HeaderContactLink from "./Header-Contact-Link";

const HeaderContact = () => {
  const [links, setLinks] = useState([{ text: "Link", key: uniqid() }]);

  const handleClick = () => {
    setLinks([...links, { text: "Link", key: uniqid() }]);
  };

  const deleteLink = (e) => {
    const linkID = e.target.dataset.id;
    const updatedLinks = links.filter((link) => link.key !== linkID);
    setLinks(updatedLinks);
  };

  const linkComponents = links.map((link) => {
    return (
      <HeaderContactLink key={link.key} link={link} deleteLink={deleteLink} />
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
        <h2 className="header__links-header" onClick={handleClick}>
          Links:
        </h2>
        {linkComponents}
      </div>
    </div>
  );
};

export default HeaderContact;
