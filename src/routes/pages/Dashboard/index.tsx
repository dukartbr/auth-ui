import React from 'react';
import { Box } from '../../../designsystem';

import UserWelcome from './UserWelcome';

const Dashboard = ({ user }: any) => {
  return (
    <Box>
      <UserWelcome user={user} />
    </Box>
  );
};

export default Dashboard;
