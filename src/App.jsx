import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import Navbar from './components/Navbar';

const Changelog = lazy(() => import('./views/Changelog'));
const Discord = lazy(() => import('./views/Discord'));
const Home = lazy(() => import('./views/Home'));
const Trello = lazy(() => import('./views/Trello'));
const Twitch = lazy(() => import('./views/Twitch'));

const App = () => {
  useEffect(() => {
    document.title = `KyButler's Site`;
  });

  return (
    <>
      <Navbar />

      <Suspense fallback={<center style={{marginTop: '1em'}}><Spinner animation="border" variant="light" /></center>}>
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