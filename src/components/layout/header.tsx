import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Row,
  ChevronDownIcon,
  HamburgerIcon,
  IconButton,
  Search2Icon,
} from '../../designsystem/index';

const CONTENT_WIDTHS = [1, 10.5 / 12];

const Header = ({ sidebarExpanded, setSidebarExpanded }: any) => {
  return (
    <Row
      alignItems='center'
      width='100%'
      height={16}
      w='full'
      bg='#18A4E0'
      zIndex={3}
      spacing={0}
      position='fixed'
      boxShadow='0px 1px 5px #043353'
    >
      <Box flex='0 0 235px'>
        <Box pl={4}>
          <Row alignItems='center'>
            <IconButton
              aria-label='Toggle Menu'
              borderRadius={32}
              color='#043353'
              icon={<HamburgerIcon />}
              onClick={() => {
                setSidebarExpanded(!sidebarExpanded);
              }}
            />
            <Box>Logo</Box>
          </Row>
        </Box>
      </Box>
      <Box flex={1}>
        <Row
          justifyContent='flex-end'
          width={CONTENT_WIDTHS}
          maxWidth={1092}
          mx='auto'
        >
          <InputGroup
            size='md'
            width='300px'
            bg='#043353'
            mx={2}
            borderRadius='64px'
          >
            <InputLeftElement color='#ffffff' children={<Search2Icon />} />
            <Input
              type='text'
              color='#ffffff'
              borderColor='transparent'
              Placeholder='Search...'
              borderRadius='64px'
            />
          </InputGroup>
          <Menu>
            <MenuButton>
              <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Row>
      </Box>
    </Row>
  );
};

export default Header;
