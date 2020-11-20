import React from 'react';
import { useBasicUser } from './store';
import { AuthProvider } from './contexts/AuthContext';

import Layout from './components/layout';

// Routes
import { PublicRoutes } from './routes';

// Mock Users

const App = () => {
  const user = useBasicUser((state) => state);
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
