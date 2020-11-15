import React from 'react';
// import './App.css';

import Layout from './components/layout';

// Routes
import { PublicRoutes } from './routes';

const App = () => (
  <div className='App'>
    <Layout>
      <PublicRoutes />
    </Layout>
  </div>
);

export default App;
