import React from 'react';
import { get } from 'lodash';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  Input,
} from '../designsystem';

// Type vs Interface?
type FormikTextFieldProps = {
  // Go over this with Lee
  [key: string]: any;
};

export const FormikTextField: React.FC<FormikTextFieldProps> = ({
  label,
  id,
  form,
  field,
  type = 'input',
  placeholder,
  disabled,
  inputProps,
  formControlProps,
}) => {
  let isTouched = true === get(form.touched, field.name);
  let errorMessage = get(form.errors, field.name);
  let hasError = isTouched && !!errorMessage;
  field.value = field.value || '';
  return (
    <FormControl isInvalid={hasError} {...formControlProps}>
      {label && (
        <FormLabel
          fontSize='sm'
          color='gray.500'
          htmlFor={id || field.name}
          title={field.name}
          css={{
            width: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            paddingRight: 0,
          }}
        >
          {label}
        </FormLabel>
      )}
      <InputGroup size='sm'>
        <Input
          id={id || field.name}
          name={field.name}
          type={type}
          placeholder={placeholder}
          value={field.value}
          isDisabled={disabled}
          onBlur={field.onBlur}
          onChange={field.onChange}
          {...inputProps}
        />
      </InputGroup>

      <FormErrorMessage fontSize='sm'>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};
