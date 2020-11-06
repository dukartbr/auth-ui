import React from 'react';
import { Box, Row, Column, Stack } from '../../designsystem/index';
import Header from '../layout/header';
import Sidebar from '../layout/sidebar';

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Row>
        <Sidebar />
        <Box bg='#D3DDE6' height='100vh' width='100vw'>
          {children}
        </Box>
      </Row>
    </>
  );
};

export default Layout;
