import React, { AnchorHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
   isPrimary: boolean;
}

const Button: React.FC<ButtonProps> = ({ isPrimary, children }) => (
  <Container isPrimary={isPrimary}>
    {children}
  </Container>
);

export default Button;
