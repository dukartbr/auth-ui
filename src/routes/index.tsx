import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Auth Routes

// How can we abstract this?
import Signup from './pages/Signup';
import SignIn from './pages/Signin';

// Public Routes
import Dashboard from './pages/Dashboard/index';
import ShowFinder from './pages/ShowFinder';
import GearSwap from './pages/GearSwap';

// Prive Routes

// Public Router

export const PublicRoutes = ({ user }: any) => {
  return (
    <Switch>
      <Route path='/show-finder'>
        {/* Here we can pass a 'user-location' prop that will find shows near the user */}
        <ShowFinder />
      </Route>
      <Route path='/gear-swap'>
        <GearSwap />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/signin'>
        <SignIn />
      </Route>
      <Route default exact path='/'>
        <Dashboard user={user} />
      </Route>
    </Switch>
  );
};

// Prive Router
