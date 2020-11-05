import React from 'react';
import {
  Box as CBox,
  HStack,
  VStack,
  Stack as CStack,
  StackProps,
  BoxProps,
} from '@chakra-ui/core';

export const Box: React.FC<BoxProps> = ({ ...props }) => <CBox {...props} />;
export const Row: React.FC<StackProps> = ({ ...props }) => (
  <HStack {...props} />
);
export const Column: React.FC<StackProps> = ({ ...props }) => (
  <VStack {...props} />
);
export const Stack: React.FC<StackProps> = ({ ...props }) => (
  <CStack {...props} />
);
