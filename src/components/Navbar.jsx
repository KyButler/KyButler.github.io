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
        <BSNavbar.Toggle aria-controls="navbar" />
        <BSNavbar.Collapse id="navbar">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/twitch">
              Twitch
            </Nav.Link>
            <Nav.Link as={Link} to="/trello">
              Trello
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/changelog">
              Changelog
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
