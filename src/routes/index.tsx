import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Public Routes
import Dashboard from './pages/Dashboard';
import ShowFinder from './pages/ShowFinder';
import GearSwap from './pages/GearSwap';

// Prive Routes

// Public Router

export const PublicRoutes = () => {
  return (
    <Switch>
      <Route path='/show-finder'>
        {/* Here we can pass a 'user-location' prop that will find shows near the user */}
        <ShowFinder />
      </Route>
      <Route path='/gear-swap'>
        <GearSwap />
      </Route>
      <Route default path='/'>
        <Dashboard />
      </Route>
    </Switch>
  );
};

// Prive Router
