import React from 'react';
import { Field, Form, Formik, FormikProps } from 'formik';
import {
  Box,
  Button,
  Image,
  FormikTextField,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Row,
  Text,
} from '../../../designsystem';

interface GearListingFormProps {
  isOpen: boolean;
  onOpen: any;
  onClose: any;
}

const GearListingForm: React.FC<GearListingFormProps> = ({
  isOpen,
  onOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Post a listing</ModalHeader>
        <ModalCloseButton />
        <ModalBody justifyContent='center'>
          <Box bg='#D3DDE6' py={15} px={4} borderRadius='8px'>
            <Formik
              initialValues={{
                title: '',
                type: '',
                price: 0,
                willShip: false,
                image: null,
              }}
              onSubmit={() => console.log('submitting')}
            >
              <Form>
                <Field
                  name='title'
                  label='Title'
                  component={FormikTextField}
                  formControlProps={{ height: '62px', my: '30px' }}
                />

                <Field
                  name='type'
                  label='Type'
                  component={FormikTextField}
                  formControlProps={{ height: '62px', my: '30px' }}
                />

                <Field
                  name='price'
                  label='Price'
                  component={FormikTextField}
                  formControlProps={{ height: '62px', my: '30px' }}
                />
              </Form>
            </Formik>
          </Box>
        </ModalBody>
      </ModalContent>
      <p>This is the gear listing form</p>
    </Modal>
  );
};

export default GearListingForm;
