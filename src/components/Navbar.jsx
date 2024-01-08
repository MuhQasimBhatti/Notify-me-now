import { useState } from "react";

import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className=" navbar navbar-expand-lg navbar-light bg-light sticky-top border-bottom sm:border-none">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
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
              <span className="m-0">Notify Me Now</span>
            </Link>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Get us
              </a>
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
