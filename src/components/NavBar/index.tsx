import React from "react";
import { NavContainer } from "./style";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <NavContainer>
      <Link to="/">
        <h1>Crypto C</h1>
      </Link>
    </NavContainer>
  );
};

export default NavBar;
