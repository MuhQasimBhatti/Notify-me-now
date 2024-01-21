import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { logo } from "../images";
import { FaBars } from "react-icons/fa";

function OffcanvasExample() {
    const expand="lg";
    return (
    <Navbar expand={expand} className="bg-body-tertiary position-absolute w-100 sticky-top ">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} width={100} />
          <span className="d-none d-md-block "> Notify Me Now</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="border-0"><FaBars/></Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            <img src={logo} width={100} />
          <span> Notify Me Now</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Nav.Link href="/" className="nav-link">Home</Nav.Link>
              <Nav.Link href="/dashboard" className="nav-link">Dashboard</Nav.Link>
              <Nav.Link href="/register" className="nav-link">Get us</Nav.Link>
            </Nav>
            <div className="d-flex">
            <Link to="/login" className="btn btn-primary me-2">
              Sign in
            </Link>
            <Link to="/register" className="btn btn-outline-primary">
              Sign up
            </Link>
          </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
