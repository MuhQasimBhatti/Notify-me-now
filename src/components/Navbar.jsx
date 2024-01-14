import { useState } from "react";

import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { logo } from "../images";

function Navbar() {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className=" navbar navbar-expand-lg navbar-light bg-light sticky-top border-bottom sm:border-none">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={toggled ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setToggled(!toggled)}
        >
          <FaBars />
        </button>

        <div
          className={`collapse navbar-collapse ${toggled ? "show" : ""}`}
          id="navbarNav"
        >
          <div className="d-flex align-items-center justify-content-center ">
            <Link to="/" id="logo" className="text-decoration-none">
              <img src={logo} width={100} />
              <span className="m-0">Notify Me Now</span>
            </Link>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Get us
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link to="/login" className="btn btn-primary me-2">
              Sign in
            </Link>
            <Link to="/register" className="btn btn-outline-primary">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
