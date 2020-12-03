import React, { AnchorHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
   isPrimary: boolean;
}

const Button: React.FC<ButtonProps> = ({ isPrimary, children, ...rest }) => (
  <Container isPrimary={isPrimary} {...rest}>
    {children}
  </Container>
);

export default Button;
