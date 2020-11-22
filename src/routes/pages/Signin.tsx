import React from 'react';
import {
  Box,
  Button,
  Card,
  FormikTextField,
  Stack,
  Row,
} from '../../designsystem';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { Field, Form, Formik, FormikProps } from 'formik';
import { useAuth } from '../../contexts/AuthContext';

interface SignInFormProps {
  email: string;
  password: string;
}

const SignInFormSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().required('Required'),
});

const SignInForm = () => {
  // @ts-ignore
  const { signIn } = useAuth();
  let history = useHistory();

  let [isSubmitting, setIsSubmitting] = React.useState(false);
  let [error, setError] = React.useState('');
  return (
    <Card header='Soundlife Sign In'>
      <Stack>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignInFormSchema}
          onSubmit={async (values: SignInFormProps) => {
            try {
              setIsSubmitting(true);
              await signIn(values.email, values.password);
              console.log('sigining in');
              // history.push('/dashboard');
            } catch (err) {
              setIsSubmitting(false);
              setError('There was an error logging in');
            }

            setIsSubmitting(false);
          }}
        >
          {(formikProps: FormikProps<SignInFormProps>) => (
            <Box bg='#D3DDE6' py={3} px={4} borderRadius='8px'>
              {error}
              <Form>
                <Field
                  name='email'
                  label='Email'
                  component={FormikTextField}
                  formControlProps={{ height: '62px', my: '30px' }}
                />

                <Field
                  name='password'
                  label='Password'
                  type='password'
                  component={FormikTextField}
                  formControlProps={{ height: '62px', my: '30px' }}
                />
                <Box width='100%' justifyContent='center'>
                  <Button
                    mt={3}
                    isDisabled={isSubmitting}
                    onClick={() => formikProps.submitForm()}
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            </Box>
          )}
        </Formik>
      </Stack>
      <Row>
        <Button
          onClick={() => {
            history.push('/signup');
          }}
        >
          Need An Account?
        </Button>
      </Row>
    </Card>
  );
};

export default SignInForm;
