import styled, { css } from 'styled-components';

interface ButtonProps {
   isSecondary: boolean;
}

export const Container = styled.button<ButtonProps>`
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

   ${(props) => props.isSecondary && css`
         color: var(--color-primary);
         border: 0.2rem var(--color-primary) solid;
         background: none;
         &:hover{
            color: var(--color-text-in-primary);
         }
   `}

   &:disabled,
   &[disabled]{
      background-color: #cccccc;
      cursor: not-allowed;
   }
`;
