import React from 'react';
import {
  Box,
  Button,
  Card,
  FormikTextField,
  Row,
  useToast,
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
  const { signIn } = useAuth();
  let history = useHistory();
  let toast = useToast();

  let [isSubmitting, setIsSubmitting] = React.useState(false);
  let [error, setError] = React.useState('');
  return (
    <Card header='Soundlife Sign In'>
      <Row justifyContent='center'>
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
              history.push('/dashboard');
            } catch (err) {
              setIsSubmitting(false);
              toast({
                status: 'error',
                description: 'There was a failure to authenticate',
              });
              setError('There was an error logging in');
            }

            setIsSubmitting(false);
          }}
        >
          {(formikProps: FormikProps<SignInFormProps>) => (
            <Box
              bg='#D3DDE6'
              py={15}
              px={16}
              my={3}
              borderRadius='8px'
              width='55%'
            >
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
                <Row justifyContent='center'>
                  <Button
                    mt={3}
                    isDisabled={isSubmitting}
                    onClick={() => formikProps.submitForm()}
                  >
                    Submit
                  </Button>
                </Row>
              </Form>
            </Box>
          )}
        </Formik>
      </Row>
      <Row justifyContent='center'>
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
