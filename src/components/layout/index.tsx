import React from 'react';
import { Box, Column, Flex } from '../../designsystem/index';
import Header from '../layout/header';
import Sidebar from '../layout/sidebar';

const Layout = ({ children }: any) => {
  let [sidebarExpanded, setSidebarExpanded] = React.useState(true);
  return (
    <Column spacing={0}>
      <Header
        sidebarExpanded={sidebarExpanded}
        setSidebarExpanded={setSidebarExpanded}
      />
      <Sidebar
        sidebarExpanded={sidebarExpanded}
        setSidebarExpanded={setSidebarExpanded}
      />
      <Flex
        pl={sidebarExpanded ? '256px' : '66px'}
        transition='0.5s'
        d='vertical'
        bgColor='#D3DDE6'
        w='full'
        h='100vh'
        overflow='scroll'
        pt='64px'
      >
        <Box py={5} px={4}>
          {children}
        </Box>
      </Flex>
    </Column>
  );
};

export default Layout;
