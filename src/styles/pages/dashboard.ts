import styled from 'styled-components';

export const Container = styled.div`
   height: 100vh;
   min-height: 90rem;
   display: flex;
   flex-direction: column;
   align-items: center;
`;
export const Header = styled.div`
   margin-top: 5rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 90%;

   div {
      display: flex;

      & + div {
         margin-left: 1rem;
      }
      a, img + img {
         margin-left: 3rem;
      }
   }

   a {
      font: 500 2rem Poppins;
      text-decoration: none;
      color: var(--color-text-unactive);
   }

   .active{
      color: var(--color-text-base);
      /*border-bottom: 0.3rem var(--color-primary) solid;*/
   }

   .active:after {
      content: '';
      border-bottom: 0.4rem solid var(--color-primary);
      width: auto;
      display: flex;
      flex-direction: column;
      border-top-left-radius: 0.4rem;
      border-radius: 0.4rem;
   }
`;
export const Main = styled.div`
   h1 {
      margin-top: 5rem;
      font: 500 4rem Poppins;
   }

   div {
      margin-top: 3rem;
   }
`;
