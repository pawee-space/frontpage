import React from 'react';
import Lottie from 'react-lottie';
import loadAnimation from '../../assets/lottie/load.json';
import { Container } from './styles';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

interface ButtonProps {
   isDisabled: boolean;
}

const Submit: React.FC<ButtonProps> = ({ isDisabled, children, ...rest }) => (
  <Container type="submit" {...rest} disabled={isDisabled}>
    {isDisabled
      ? (
        <Lottie
          options={defaultOptions}
          height={50}
          width={50}
          isStopped={false}
          isPaused={false}
        />
      )
      : children}
  </Container>
);

export default Submit;
