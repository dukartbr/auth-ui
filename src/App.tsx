import React from 'react';
import { LoggedInUser } from './store';
import { AuthProvider } from './contexts/AuthContext';

import Layout from './components/layout';

// Routes
import { PublicRoutes } from './routes';

// Mock Users

const App = () => {
  const user = LoggedInUser((state) => state);
  return (
    <div className='App'>
      <AuthProvider>
        <Layout>
          <PublicRoutes user={user} />
        </Layout>
      </AuthProvider>
    </div>
  );
};

export default App;
