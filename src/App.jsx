import React, {lazy, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar';

const Home = lazy(() => import('./components/Home'));
const NotFound = lazy(() => import('./components/NotFound'));

const App = () => {
  useEffect(() => {
    document.title = "KyButler's Site";
  });

  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
};
export default App;
