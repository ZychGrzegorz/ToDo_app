import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="navContainer">
        <Link to="/" className="logo">
          Todo App
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
