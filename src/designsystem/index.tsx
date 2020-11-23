import React from 'react';

import {
  Avatar,
  AvatarBadge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  IconButton,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/core';

// Chakra Hooks
import { useDisclosure } from '@chakra-ui/react';

export {
  AddIcon,
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
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
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
  Image,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  Text,
  VStack as Column,
  useDisclosure,
};

// Form UI
export { FormikTextField } from './form';

interface CardProps {
  header: string;
}

export const Card: React.FC<CardProps> = ({ header, children }) => {
  return (
    <Stack bg='#ffffff' width='100%' py={4} px={6} borderRadius='8px' my={6}>
      <HStack justifyContent='center'>
        <Box fontSize='32px' fontWeight='bold'>
          {header}
        </Box>
      </HStack>
      <HStack>{children}</HStack>
    </Stack>
  );
};
