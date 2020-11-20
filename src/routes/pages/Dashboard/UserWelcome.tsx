import React from 'react';
import { Box, Button, Card } from '../../../designsystem';

const UserWelcome = ({ user }: any) => {
  let { firstName, loginAttempts, increaseLoginAttempt } = user;
  return (
    <Card header={`Hello ${firstName}! Welcome Back!`}>
      <Box>User has tried to login {loginAttempts} times</Box>
      <Button onClick={() => increaseLoginAttempt()}>Try to login</Button>
    </Card>
  );
};

export default UserWelcome;
