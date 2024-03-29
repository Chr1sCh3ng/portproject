import React from "react";
import { Link } from "react-router-dom";

function SiteNav() {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <Link
            to="/"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Link>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link to="./" className="nav-link px-2 text-white link-button">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/AboutMe"
                  className="nav-link px-2 text-white link-button"
                >
                  About Me
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/MittsAndDice">
                    How to play Mitts and dice
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/whiteelephanttwist">
                    White Elephant with a twist
                  </a>
                  <a className="dropdown-item" href="/megacaps">
                    Mega Caps
                  </a>
                  <a className="dropdown-item" href="/VisualRep">
                    Visual
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="divider p-1"></div>
    </React.Fragment>
  );
}

export default SiteNav;
