import ls from 'local-storage';
import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Alert, Container, Navbar, Nav } from 'react-bootstrap';

import Changelog from './views/Changelog';
import Discord from './views/Discord';
import Home from './views/Home';
import Trello from './views/Trello';
import Twitch from './views/Twitch';

const App = () => {
  const [showWIPAlert, setShowWIPAlert] = useState(ls.get('showWIPAlert') != null ? ls.get('showWIPAlert') : true);

  useEffect(() => {
    if (ls.get('showWIPAlert') == null) {
      ls.set('showWIPAlert', true);
    }
    document.title = `KyButler's Site`;
    console.log('v1.0.2');
  });

  const closeWarning = () => {
    setShowWIPAlert(false);
    ls.set('showWIPAlert', false);
  }

  return (
    <>
      <Navbar variant="dark" style={{ marginBottom: '1em' }} expand="sm">
        <Navbar.Brand as={Link} to="/" variant="dark">KyButler</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/twitch">Twitch</Nav.Link>
            <Nav.Link as={Link} to="/discord">Discord</Nav.Link>
            <Nav.Link as={Link} to="/trello">Trello</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/changelog" className="float-right">Changelog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {showWIPAlert ?
        <Container>
          <Alert variant='info' onClose={() => closeWarning()} dismissible>
            This site is new, and very much a WIP!
        </Alert>
        </Container> : null}

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/twitch'>
          <Twitch />
        </Route>
        <Route exact path='/changelog'>
          <Changelog />
        </Route>
        <Route exact path='/discord'>
          <Discord />
        </Route>
        <Route exact path='/trello'>
          <Trello />
        </Route>
      </Switch>
    </>);
};
export default App;