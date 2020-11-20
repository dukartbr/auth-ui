import React from 'react';
import { Box, Button, Card, FormikTextField } from '../../designsystem';
import { Field, Form, Formik, FormikProps } from 'formik';

interface SignInFormProps {
  email: string;
  password: string;
}

const SignInForm = () => {
  return (
    <Card header='Soundlife Sign In'>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values: SignInFormProps) => {
          console.log('values', values);
        }}
      >
        {(formikProps: FormikProps<SignInFormProps>) => (
          <Box>
            <Form>
              <Field
                name='email'
                label='Email'
                component={FormikTextField}
                formControlProps={{ height: '62px', mb: null }}
              />

              <Field
                name='password'
                label='Password'
                type='password'
                component={FormikTextField}
                formControlProps={{ height: '62px', mb: null }}
              />
              <Button mt={3} onClick={() => console.log('hello')}>
                Submit
              </Button>
            </Form>
          </Box>
        )}
      </Formik>
    </Card>
  );
};

export default SignInForm;
