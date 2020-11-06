import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Row,
  ChevronDownIcon,
} from '../../designsystem/index';

const CONTENT_WIDTHS = [1, 10.5 / 12];

const Header = () => {
  return (
    <Row alignItems='center' width='100%' height={16} bg='#18A4E0'>
      <Box flex='0 0 235px'>
        <Box>Logo</Box>
      </Box>
      <Box flex={1}>
        <Row
          justifyContent='flex-end'
          width={CONTENT_WIDTHS}
          maxWidth={1092}
          mx='auto'
        >
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                // @ts-ignore
                rightIcon={<ChevronDownIcon />}
              >
                User
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Row>
      </Box>
    </Row>
  );
};

export default Header;
