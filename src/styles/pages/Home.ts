import styled from 'styled-components';

export const Container = styled.div`
   margin: 50px 45px 0 45px;
`;

export const Header = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`;

export const ButtonsContainer = styled.div`
   button {
      background: var(--color-primary);
      width: 13rem;
      height: 4.5rem;
      color: var(--color-text-in-primary);
      border-radius: 0.5rem;
      border: 0.2rem var(--color-primary) solid;

      & + button {
         margin-left: 1rem;
         background: none;
         color: var(--color-primary);
      }
   }

`;
