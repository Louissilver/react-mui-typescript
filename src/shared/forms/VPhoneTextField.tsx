import { TextField, TextFieldProps } from '@mui/material';
import { useField } from '@unform/core';
import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';

type TVTextFieldProps = TextFieldProps & {
  name: string;
  disabled: boolean;
};

export const VPhoneTextField: React.FC<TVTextFieldProps> = ({
  name,
  disabled = false,
  ...rest
}) => {
  const { fieldName, registerField, defaultValue, error, clearError } =
    useField(name);

  const [value, setValue] = useState(defaultValue || '');

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue),
    });
  }, [registerField, fieldName, value]);

  return (
    <InputMask
      mask="(99) 9 9999-9999"
      onChange={(e) => setValue(e.target.value)}
      defaultValue={defaultValue}
      value={value}
      disabled={disabled}
    >
      {() => (
        <TextField
          {...rest}
          onKeyDown={() => (error ? clearError() : undefined)}
          error={!!error}
          helperText={error}
        />
      )}
    </InputMask>
  );
};
