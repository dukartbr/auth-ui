import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// Auth Routes

// Public Routes;
import SignIn from './pages/Signin';
import Signup from './pages/Signup';

// Prive Routes
import Dashboard from './pages/Dashboard/index';
import ShowFinder from './pages/ShowFinder';
import ShowBuilder from './pages/ShowFinder/showBuilder';
import GearSwap from '../routes/pages/GearSwap';

// Public Router

export const PublicRoutes = ({ user }: any) => {
  const { currentUser } = useAuth();
  return (
    <Switch>
      <Route path='/show-finder'>
        <ShowFinder />
      </Route>
      <Route path='/show-builder'>
        <ShowBuilder />
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
      <Route path='/dashboard'>
        {currentUser ? <Dashboard user={user} /> : <Redirect to='/signin' />}
      </Route>
      <Route default exact path='/'>
        {currentUser ? <Dashboard user={user} /> : <Redirect to='/signin' />}
      </Route>
    </Switch>
  );
};

// Prive Router
