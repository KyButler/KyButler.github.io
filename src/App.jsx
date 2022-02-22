import React, {Suspense, lazy, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

import Navbar from './components/Navbar';

const Changelog = lazy(() => import('./views/Changelog'));
const Home = lazy(() => import('./views/HomeNew'));
const NotFound = lazy(() => import('./views/NotFound'));
const Trello = lazy(() => import('./views/Trello'));
const Twitch = lazy(() => import('./views/Twitch'));

const App = () => {
  useEffect(() => {
    document.title = `KyButler's Site`;
  });

  const ROUTES = [
    {
      path: '/',
      exact: true,
      render: <Home />,
    },
    {
      path: '/changelog',
      exact: true,
      render: <Changelog />,
    },
    {
      path: '/trello',
      exact: true,
      render: <Trello />,
    },
    {
      path: '/twitch',
      exact: true,
      render: <Twitch />,
    },
    {
      path: '*',
      exact: false,
      render: <NotFound />,
    },
  ];

  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <center style={{marginTop: '1em'}}>
            <Spinner animation="border" variant="light" />
          </center>
        }>
        <Routes>
          {ROUTES.map(route => (
            <Route key={route.path} exact={route.exact} path={route.path} element={route.render} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
