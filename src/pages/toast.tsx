import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useToast } from '../hooks/toast';

const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background: var(--color-background-darker);

   button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      background: var(--color-primary);
      height: 2rem;
      border-radius:  2rem;
      color: var(--color-text-in-primary);

      &:hover {
         cursor: pointer;
      }
   }
`;

const ToastTeste: React.FC = () => {
  const { addToast } = useToast();

  const handleCreateToast = useCallback(() => {
    addToast({
      type: 'error',
      title: 'Problemoo!',
      description: 'That password and login doesn`t match. Try again?',
    });
  }, [addToast]);

  return (
    <Container>
      <button type="button" onClick={handleCreateToast}>Create Toast</button>
    </Container>
  );
};

export default ToastTeste;
