import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className="sticky-top" bg="light" expand="lg">
      <Navbar.Brand className="navbar-brand" href="/">
        ClingShot Creative
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navigation d-flex">
          <Link
            className="Nav-link p-3 text-decoration-none"
            activeClassName="active"
            to="/"
          >
            Home
          </Link>
          <Link
            className="Nav-link p-3 text-decoration-none"
            activeClassName="active"
            to="/works"
          >
            Works
          </Link>
          <Link
            className="Nav-link p-3 text-decoration-none"
            activeClassName="active"
            to="/about"
          >
            About Us
          </Link>
          <Link
            className="Nav-link p-3 text-decoration-none"
            activeClassName="active"
            to="/contacts"
          >
            Contacts
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
