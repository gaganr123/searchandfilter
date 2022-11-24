import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="p-3"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-white">
            React-App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link className="text-decoration-none text-white" to="/">
                Dashboard
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link className="text-decoration-none text-white" to="/about">
                Image Search
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link className="text-decoration-none text-white" to="/service">
                Crud-App
              </Link>
            </Nav.Link>
          </Nav>
          <Nav className="gap-2">
            <Nav.Link
              className="btn btn-light text-danger"
              href="tel:9822659471"
              rel="no-references"
            >
              Call Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
