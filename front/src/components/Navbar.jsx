import React from "react";
import { Link, Links } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">
          <h1>LOGO</h1>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
