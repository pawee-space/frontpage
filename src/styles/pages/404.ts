import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-content: center;
   height: 100vh;

   user-select: none;
   -webkit-user-select: none;
   -khtml-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;

   @media (max-width: 1350px) {
      img {
         width: 63.926vw;
      }
   }
`;
