import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   name: string;
   // icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const {
    fieldName, defaultValue, registerField, error,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <Container ref={inputRef} defaultValue={defaultValue} {...rest} />;
};

export default Input;
