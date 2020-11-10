import styled from 'styled-components';

export const Input = styled.input`
   background: none;
   border: 0.1rem var(--color-background-darker) solid;
   border-radius: 0.5rem;
   width: 90%;
   height: 5rem;
   min-height: 4rem;
   padding-left: 1rem;
   font: 500 1.3rem Roboto;

   &::placeholder {
      color: var(--color-placeholders);
   }

   &:focus {
      border: 0.1rem var(--color-primary) solid;
   }
`;
