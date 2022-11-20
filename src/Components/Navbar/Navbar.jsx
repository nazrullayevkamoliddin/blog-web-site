import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";
const Navbar = () => {
  return (
    <div>
      <Slide right cascade>
        <nav>
          <Link to='/' className="link">
            {" "}
            <h2 className="logo">
              Portfo<span>Lio</span>
            </h2>
          </Link>

          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about">About Me </Link>
            </li>
            <li>
              <Link to="/service">Servises </Link>
            </li>
            <li>
              <Link to="/skills"> Skills </Link>
            </li>
            <li>
              <Link to="/contact"> Contact us </Link>
            </li>
          </ul>
          <a href="/" className="btn">
            {" "}
            Subcribe{" "}
          </a>
        </nav>
      </Slide>
    </div>
  );
};

export default Navbar;
