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
} from '../..//designsystem';

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
    <Box
      bg='#ffffff'
      py={4}
      px={6}
      width='25%'
      borderRadius='8px'
      boxShadow='1px 1px 2px #999999'
      my={2}
      mx={5}
    >
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
          <ModalBody justifyContent='center'>
            <Box>
              <Image src={imageURL} mx='auto' alt={`${title}-${id}`} />
              <Row>
                <Box maxW='50%'>
                  <Text>Category: {type}</Text>
                  <Text color='gray.500' fontSize='16px'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Hic, necessitatibus repudiandae? Explicabo, quis. Iure harum
                    quia natus. Modi tempora, officia inventore vitae dolorum
                    magni dicta minus numquam, ducimus distinctio eius?
                  </Text>
                </Box>
                <Box maxW='50%'>
                  <Text>${price}</Text>
                  <Text>
                    This item {willShip ? 'will ship' : 'does not ship'}
                  </Text>
                </Box>
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
              Contact Seller
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
