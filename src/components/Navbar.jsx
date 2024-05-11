import React from "react";

function Navbar({
  handleScrollToAboutMe,
  handleScrollToProject,
  handleScrollToExperience,
  handleScrollToConnect,
}) {
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
                <a
                  className="nav-link custom-link"
                  aria-current="page"
                  href="#about-me"
                  onClick={handleScrollToAboutMe}
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link custom-link"
                  href="#my-project"
                  onClick={handleScrollToProject}
                >
                  My Project
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link custom-link"
                  href="#experience"
                  onClick={handleScrollToExperience}
                >
                  Working Experience
                </a>
              </li>
            </div>
            <a style={{ textDecoration: "none" }}
              className="connect-button"
              href="#lets-connect"
              onClick={handleScrollToConnect}
            >
              Let's Connect
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
