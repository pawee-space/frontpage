import styled from 'styled-components';

export const Container = styled.button`
   background: var(--color-primary);
   color: var(--color-text-in-primary);
   width: 13rem;
   height: 4.5rem;
   border-radius: 0.5rem;
   transition: background-color 0.2s linear;

   &:hover{
      cursor: pointer;
      background: var(--color-primary-dark);
   }

   &:disabled,
   &[disabled]{
      background-color: #cccccc;
      cursor: not-allowed;
   }
`;
