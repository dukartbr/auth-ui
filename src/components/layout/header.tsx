import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoggedInUser } from '../../store';
import { Link } from 'react-router-dom';
import {
  Avatar,
  AvatarBadge,
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
  HamburgerIcon,
  IconButton,
  Search2Icon,
  useToast,
} from '../../designsystem/index';
import { useAuth } from '../../contexts/AuthContext';

const CONTENT_WIDTHS = [1, 10.5 / 12];

const Header = ({ sidebarExpanded, setSidebarExpanded }: any) => {
  const toast = useToast();
  const user = LoggedInUser((state) => state);
  const history = useHistory();

  const { signOut } = useAuth();
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
          <Button
            onClick={() => {
              toast({
                status: 'error',
                title: 'Test Toast',
              });
            }}
          >
            Trigger Toast
          </Button>
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
              placeholder='Search...'
              borderRadius='8px'
            />
          </InputGroup>
          <Menu>
            <MenuButton>
              <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov'>
                <AvatarBadge
                  borderColor='transparent'
                  boxSize='1.25em'
                  // @ts-ignore
                  bg={user.isLoggedIn ? 'green.500' : 'tomato'}
                />
              </Avatar>
            </MenuButton>
            <MenuList>
              {user.isLoggedIn && (
                <>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem
                    onClick={async () => {
                      signOut();
                      history.push('/signin');
                    }}
                  >
                    Logout
                  </MenuItem>
                </>
              )}
              {!user.isLoggedIn && (
                <Link to='/signin'>
                  <MenuItem>Sign In</MenuItem>
                </Link>
              )}
            </MenuList>
          </Menu>
        </Row>
      </Box>
    </Row>
  );
};

export default Header;
