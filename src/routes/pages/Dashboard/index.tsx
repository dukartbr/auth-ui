import React from 'react';
import { useHistory } from 'react-router-dom';
import { AddIcon, Box, Button, Text } from '../../../designsystem';

import UserWelcome from './UserWelcome';

const Dashboard = ({ user }: any) => {
  const history = useHistory();
  return (
    <Box>
      <Button
        onClick={() => {
          history.push('/showbuilder');
        }}
      >
        <AddIcon />
        <Text mx={2}>Book A Show</Text>
      </Button>
      <UserWelcome user={user} />
    </Box>
  );
};

export default Dashboard;
