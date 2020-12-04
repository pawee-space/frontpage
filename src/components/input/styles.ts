import styled, { css } from 'styled-components';

interface InputProps {
   isFocused: boolean;
}

export const Container = styled.div<InputProps>`
   background: none;
   border: 0.1rem var(--color-background-darker) solid;
   border-radius: 0.5rem;
   width: 90%;
   height: 5rem;
   min-height: 4rem;
   padding: 0 1rem;

   display: flex;
   align-items: center;

   ${(props) => props.isFocused && css`
      border: 0.1rem var(--color-primary) solid;
   `}

   input {
      &::placeholder {
         color: var(--color-placeholders);
      }
      font: 500 1.3rem Roboto;
      flex: 1;
      height: 100%;
   }

   svg {
      font-size: 2rem;
      stroke-width: 0.1rem;
      color: var(--color-placeholders);

      &:hover {
         cursor: pointer;
      }
   }
`;
