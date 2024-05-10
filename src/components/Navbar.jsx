import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg container-fluid d-relative">
      <div className="nav-content w-100">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex">
            <div className="navbar-menu__tengah d-flex">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  My Project
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Working Experience
                </a>
              </li>
            </div>
            <button className="connect-button" type="submit">
              Let's Connect
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
