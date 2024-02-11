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
      <div className="d-flex align-items-center justify-content-center mb-5 mb-md-0  ">
    <Navbar expand={expand} className=" position-absolute sticky-top rounded-5 m-3 px-2 px-md-5 " style={{width:"95%", backgroundColor:"#292d36"}}>
      <Container fluid >
        <Navbar.Brand href="/">
          <img src={logo} width={100} />
          <span className="d-none d-md-block text-white"> Notify Me Now</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="border-0 text-white"><FaBars/></Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
          style={{backgroundColor:"#292d36"}}
        >
          <Offcanvas.Header className="text-white" closeButton variant="white">
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            <img src={logo} width={100} />
          <span> Notify Me Now</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className=" justify-content-center flex-grow-1 pe-3">
              <Nav.Link href="/" className="text-white nav-link">Home</Nav.Link>
              <Nav.Link href="/dashboard" className="text-white nav-link">Dashboard</Nav.Link>
              <Nav.Link href="/getus" className="text-white nav-link">Get us</Nav.Link>
            </Nav>
            <div className="d-flex">
            <Link to="/login" className="custom-button rounded-4 me-2">
              Sign in
            </Link>
            <Link to="/register" className="signupbtn rounded-4 d-flex align-items-center justify-content-center">
              Sign up
            </Link>
          </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </div>
  );
}

export default OffcanvasExample;
