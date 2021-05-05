import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import Navbar from './components/Navbar';

const Status = lazy(()=> import('./views/Status'));

const AvatarList = lazy(() => import('./views/AvatarList'));
const Changelog = lazy(() => import('./views/Changelog'));
const Discord = lazy(() => import('./views/Discord'));
const Home = lazy(() => import('./views/Home'));
const NotFound = lazy(()=> import('./views/NotFound'));
const Trello = lazy(() => import('./views/Trello'));
const Twitch = lazy(() => import('./views/Twitch'));
const YouTube = lazy(() => import('./views/YouTube'));

const App = () => {
  useEffect(() => {
    document.title = `KyButler's Site`;
  });

  const ROUTES = [
    {
      path: '/',
      exact: true,
      render: <Home />
    },
    {
      path: '/avatarlist',
      exact: true,
      render: <AvatarList />
    },
    {
      path: '/changelog',
      exact: true,
      render: <Changelog />
    },
    {
      path: '/discord',
      exact: true,
      render: <Discord />
    },
    {
      path: '/status',
      exact: true,
      render: <Status />
    },
    {
      path: '/trello',
      exact: true,
      render: <Trello />
    },
    {
      path: '/twitch',
      exact: true,
      render: <Twitch />
    },
    {
      path: '/youtube',
      exact: true,
      render: <YouTube />
    },
    {
      path: '*',
      exact: false,
      render: <NotFound />
    },
  ]

  return (
    <>
      <Navbar />
      <Suspense fallback={<center style={{marginTop: '1em'}}><Spinner animation="border" variant="light" /></center>}>
        <Switch>
        {ROUTES.map((route) => (
          <Route key={route.path} exact={route.exact} path={route.path}>
            {route.render}
          </Route>
        ))}
        </Switch>
      </Suspense>
    </>);
};
export default App;