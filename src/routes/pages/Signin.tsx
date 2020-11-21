import React from 'react';
import { Box, Button, Card, FormikTextField } from '../../designsystem';
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
  const { signIn, currentUser } = useAuth();
  let history = useHistory();

  let [isSubmitting, setIsSubmitting] = React.useState(false);
  return (
    <Card header='Soundlife Sign In'>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignInFormSchema}
        onSubmit={async (values: SignInFormProps) => {
          setIsSubmitting(true);
          await signIn(values.email, values.password);
          history.push('/');
          setIsSubmitting(false);
        }}
      >
        {(formikProps: FormikProps<SignInFormProps>) => (
          <Box bg='#D3DDE6' py={3} px={4} borderRadius='8px'>
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
              <Box>
                <pre>{currentUser && JSON.stringify(currentUser.email)}</pre>
              </Box>
            </Form>
          </Box>
        )}
      </Formik>
    </Card>
  );
};

export default SignInForm;
