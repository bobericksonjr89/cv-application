import React from "react";
import HeaderName from "./Header-Name.js";
import HeaderTitle from "./Header-Title.js";
import HeaderContact from "./Header-Contact.js";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <HeaderName />
      <HeaderTitle />
      <HeaderContact />
    </header>
  );
}

export default Header;
