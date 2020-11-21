import React from 'react';
import { Box, Button, Card, FormikTextField } from '../../designsystem';
import * as Yup from 'yup';
import { Field, Form, Formik, FormikProps } from 'formik';
import { useAuth } from '../../contexts/AuthContext';

interface SignUpFormProps {
  email: string;
  password: string;
}

const SignUpFormSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords must match'
  ),
});

const SignUpForm = () => {
  // @ts-ignore
  const { signUp, currentUser } = useAuth();

  let [isSubmitting, setIsSubmitting] = React.useState(false);

  console.log('currentUser :>> ', currentUser);
  return (
    <Card header='Soundlife Sign Up'>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignUpFormSchema}
        onSubmit={async (values: SignUpFormProps) => {
          setIsSubmitting(true);
          await signUp(values.email, values.password);
          setIsSubmitting(false);
        }}
      >
        {(formikProps: FormikProps<SignUpFormProps>) => (
          <Box>
            <Form>
              <Field
                name='email'
                label='Email'
                component={FormikTextField}
                formControlProps={{ height: '62px', mb: '32px' }}
              />

              <Field
                name='password'
                label='Password'
                type='password'
                component={FormikTextField}
                formControlProps={{ height: '62px', mb: '32px' }}
              />

              <Field
                name='confirmPassword'
                label='Confirm Password'
                type='password'
                component={FormikTextField}
                formControlProps={{ height: '62px', mb: '32px' }}
              />
              <pre>{currentUser.email}</pre>
              <Button
                mt={3}
                onClick={() => formikProps.submitForm()}
                isDisabled={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          </Box>
        )}
      </Formik>
    </Card>
  );
};

export default SignUpForm;
