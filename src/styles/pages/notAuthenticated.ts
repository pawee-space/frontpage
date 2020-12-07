import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   height: 100vh;
   width: 100%;
   background: var(--color-background-darker);
   justify-content: center;
   align-items: center;

   h1 {
      color: var(--color-background-footer);
      margin-left: 1.5rem;
   }

   @media(max-width: 850px){
      flex-direction: column;

      font-size: 3vw;
   }
`;
