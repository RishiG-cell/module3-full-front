import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { handleLogout, currentUser } = useContext(AuthContext);

  return (
    <>
      <nav>
        <Link to="/">
          <h1>LOGO</h1>
        </Link>
        {currentUser && <button onClick={handleLogout}>Loggout</button>}
      </nav>
    </>
  );
};

export default Navbar;
