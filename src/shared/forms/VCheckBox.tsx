import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from '@mui/material';
import { useField } from '@unform/core';
import { useEffect, useRef, useState } from 'react';

type TVTextFieldProps = CheckboxProps & {
  name: string;
  label: string;
};

export const VCheckBox: React.FC<TVTextFieldProps> = ({
  name,
  label,
  ...rest
}) => {
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [value, setValue] = useState(defaultValue || '');
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue),
    });
  }, [registerField, fieldName, value]);

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              {...rest}
              value={value}
              inputRef={inputRef}
              checked={value}
              onClick={() => setValue(!value)}
            />
          }
          label={label}
        />
      </FormGroup>
      {!!error && <FormHelperText>{error}</FormHelperText>}
    </>
  );
};
