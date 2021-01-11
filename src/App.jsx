import ls from 'local-storage';
import React, { Suspense, lazy, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Navbar, Nav, Spinner } from 'react-bootstrap';

const Changelog = lazy(() => import('./views/Changelog'));
const Discord = lazy(() => import('./views/Discord'));
const Home = lazy(() => import('./views/Home'));
const Trello = lazy(() => import('./views/Trello'));
const Twitch = lazy(() => import('./views/Twitch'));

const App = () => {
  useEffect(() => {
    document.title = `KyButler's Site`;
    ls.clear();
  });

  return (
    <>
      <Navbar variant="dark" style={{ marginBottom: '1em' }} expand="sm">
        <Navbar.Brand as={Link} to="/" variant="dark">KyButler</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link as={Link} to="/twitch">Twitch</Nav.Link> */}
            <Nav.Link as={Link} to="/discord">Discord</Nav.Link>
            <Nav.Link as={Link} to="/trello">Trello</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/changelog" className="float-right">Changelog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Suspense fallback={<center><Spinner animation="border" variant="light" /></center>}>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/twitch' component={Twitch} /> */}
          <Route exact path='/changelog' component={Changelog} />
          <Route exact path='/discord' component={Discord} />
          <Route exact path='/trello' component={Trello} />
        </Switch>
      </Suspense>
    </>);
};
export default App;