import React from 'react';
import {
  Avatar as CAvatar,
  Menu as CMenu,
  MenuButton as CMenuButton,
  MenuList as CMenuList,
  MenuItem as CMenuItem,
  Box as CBox,
  Button as CButton,
  ButtonProps,
  HStack,
  VStack,
  Stack as CStack,
  AvatarProps,
  BoxProps,
  MenuProps,
  MenuButtonProps,
  MenuListProps,
  MenuItemProps,
  StackProps,
} from '@chakra-ui/core';
import { ChevronDownIcon } from '@chakra-ui/icons';
export { ChevronDownIcon };

// Easy Re-exports
export const Avatar: React.FC<AvatarProps> = ({ ...props }) => (
  <CAvatar {...props} />
);
export const Box: React.FC<BoxProps> = ({ ...props }) => <CBox {...props} />;
export const Column: React.FC<StackProps> = ({ ...props }) => (
  <VStack {...props} />
);
export const Button: React.FC<ButtonProps> = ({ ...props }) => (
  <CButton {...props} />
);
export const Menu: React.FC<MenuProps> = ({ ...props }) => <CMenu {...props} />;
export const MenuButton: React.FC<MenuButtonProps> = ({ ...props }) => (
  <CMenuButton {...props} />
);
export const MenuItem: React.FC<MenuItemProps> = ({ ...props }) => (
  <CMenuItem {...props} />
);
export const MenuList: React.FC<MenuListProps> = ({ ...props }) => (
  <CMenuList {...props} />
);
export const Row: React.FC<StackProps> = ({ ...props }) => (
  <HStack {...props} />
);
export const Stack: React.FC<StackProps> = ({ ...props }) => (
  <CStack {...props} />
);
