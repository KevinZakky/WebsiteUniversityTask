import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white w-100">
      <div className="container d-flex">
        <a className="navbar-brand" style={{ marginLeft: "30px" }} href="#">
          <img src="asset/logo-ilab.png" alt="logo-ilab" width="80" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div className="btn-sign">
          <button type="button" className="btn btn-outline-dark btn-sm">
            SIGN UP
          </button>
          <button type="button" className="btn btn-primary btn-sm" disabled>
            LOG IN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
