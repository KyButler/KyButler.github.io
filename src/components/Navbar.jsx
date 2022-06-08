import React from 'react';
import {Container, Nav, Navbar as BSNavbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <BSNavbar className="shadow" expand="sm" fixed="top" variant="dark">
      <Container>
        <BSNavbar.Brand as={Link} to="/" variant="dark">
          KyButler
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="navbar"/>
        <BSNavbar.Collapse id="navbar">
          <Nav>
            <a className="nav-link" href="https://trello.com/b/oG4w3rhH/kybutler">
              Trello
            </a>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
