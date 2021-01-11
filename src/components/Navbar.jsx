import React from 'react';
import { Navbar as BSNavbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <BSNavbar variant="dark" expand="sm" fixed="top">
            <BSNavbar.Brand as={Link} to="/" variant="dark">KyButler</BSNavbar.Brand>
            <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BSNavbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link as={Link} to="/twitch">Twitch</Nav.Link> */}
                    <Nav.Link as={Link} to="/discord">Discord</Nav.Link>
                    <Nav.Link as={Link} to="/trello">Trello</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/changelog" className="float-right">Changelog</Nav.Link>
                </Nav>
            </BSNavbar.Collapse>
        </BSNavbar>
    )
}

export default Navbar;