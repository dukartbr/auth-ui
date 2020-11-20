import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Column, Icon, Text } from '../../../designsystem/index';

// Sidebar Links
import sidebarLinks from './sidebarlinks';

const expandedWidth = 240;
const minWidth = 45;

const SidebarItem = ({ icon, title, id, path }: any) => {
  return (
    <Button
      as={Link}
      alignContent='left'
      justifyContent='left'
      to={`${path}`}
      d='flex'
      size='sm'
      variant='ghost'
      py={6}
    >
      <Icon mr={5} fontSize={16} as={icon} />
      <Text>{title}</Text>
    </Button>
  );
};

const Sidebar = ({ sidebarExpanded }: any) => {
  return (
    <Column
      height='100vh'
      backgroundColor='#ffffff'
      width={sidebarExpanded ? `${expandedWidth}px` : `${minWidth}px`}
      overflow='hidden'
      display={{ base: 'none', sm: 'none', md: 'none', lg: 'initial' }}
      d='flex'
      top={0}
      left={0}
      paddingTop={24}
      zIndex={2}
      transition='0.5s'
      flexDir='column'
      position='fixed'
    >
      <Box d='flex' flexDir='column' overflowX='hidden'>
        {sidebarLinks.map((linkGroup) => (
          <Box
            key={linkGroup.header}
            width={sidebarExpanded ? `${expandedWidth}px` : `${minWidth}px`}
            py={4}
          >
            <Text
              transition='0.5s'
              align='center'
              fontSize={sidebarExpanded ? 'sm' : '0px'}
              w='56px'
              fontWeight='700'
              pl={4}
              d='flex'
              whiteSpace='nowrap'
              textTransform='uppercase'
              color='gray.400'
              opacity={sidebarExpanded ? '100%' : '0%'}
            >
              {linkGroup.header}
            </Text>
            <Box
              fontSize={3}
              width='100%'
              alignItems='center'
              alignContent='center'
              justifyContent='center'
              justifyItems='center'
              pl={0}
            >
              {linkGroup.links.map(({ icon, path, title, id }) => (
                <SidebarItem
                  key={id}
                  icon={icon}
                  path={path}
                  title={title}
                  id={id}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Column>
  );
};

export default Sidebar;
