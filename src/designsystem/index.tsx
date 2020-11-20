import React from 'react';

import {
  Avatar,
  AvatarBadge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/core';

export {
  ChevronDownIcon,
  ChatIcon,
  CheckIcon,
  CheckCircleIcon,
  DeleteIcon,
  DragHandleIcon,
  EditIcon,
  EmailIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  Search2Icon,
} from '@chakra-ui/icons';

export {
  Avatar,
  AvatarBadge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  HStack as Row,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
  VStack as Column,
};

// Form UI
export { FormikTextField } from './form';

interface CardProps {
  header: string;
}

export const Card: React.FC<CardProps> = ({ header, children }) => {
  return (
    <Stack bg='#ffffff' width='100%' py={4} px={6} borderRadius='35px'>
      <HStack>
        <Box>{header}</Box>
      </HStack>
      <HStack>{children}</HStack>
    </Stack>
  );
};
