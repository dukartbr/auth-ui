import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button } from '../../../designsystem';

import UserWelcome from './UserWelcome';

const Dashboard = ({ user }: any) => {
  const history = useHistory();
  return (
    <Box>
      <Button
        onClick={() => {
          history.push('/showbuilder');
        }}
      />
      <UserWelcome user={user} />
    </Box>
  );
};

export default Dashboard;
