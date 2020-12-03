import styled, { css } from 'styled-components';

interface ButtonProps {
   isPrimary: boolean;
}

export const Container = styled.a<ButtonProps>`
   background: var(--color-primary);
   color: var(--color-text-in-primary);
   border-radius: 0.5rem;
   border: 0.2rem var(--color-primary) solid;
   transition: background-color 0.2s linear;
   text-decoration: none;
   padding: 0.7rem 1.5rem;

   &:hover{
      cursor: pointer;
      background: var(--color-primary-dark);
      color: var(--color-text-in-primary);
   }

   ${(props) => !props.isPrimary === true
      && css`
         background: none;
         color: var(--color-primary)
      `}
`;
