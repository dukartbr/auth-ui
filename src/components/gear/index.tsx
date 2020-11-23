import React from 'react';
import {
  Box,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Row,
  Text,
  useDisclosure,
} from '../../designsystem';

import { sampleGearListingProps } from '../../routes/pages/GearSwap/gearItems';

// Gear Item for Sale
export const GearListingItem: React.FC<sampleGearListingProps> = ({
  id,
  title,
  type,
  price,
  willShip,
  imageURL,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg='#ffffff' py={4} px={6} width='25%' borderRadius='8px'>
      <Row justifyContent='center' width='100%'>
        <Image src={imageURL} alt={`${title}-${id}`} />
      </Row>
      <Row py={6}>
        <Text fontWeight='bold' fontSize='16px'>
          {title}
        </Text>
        <Text>
          <p>${price}</p>
        </Text>
      </Row>
      <Row justifyContent='center'>
        <Button onClick={onOpen}>View Gear</Button>
      </Row>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box justifyContent='center' width='100%'>
              <Image src={imageURL} alt={`${title}-${id}`} />
              <Row>
                <Text>{type}</Text>
                <Text>
                  This item {willShip ? 'will ship' : 'does not ship'}
                </Text>
              </Row>
            </Box>
          </ModalBody>
          <ModalFooter justifyContent='center'>
            <Button
              onClick={() => {
                console.log('we gonna buy');
              }}
              mx={2}
            >
              Purchase
            </Button>
            <Button onClick={onClose} mx={2}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
