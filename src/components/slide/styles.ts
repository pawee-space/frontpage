import styled from 'styled-components';

export const Container = styled.div`
   position: relative;
   width: auto;
   height: auto;
   display: inline-block;


   img {
      border-radius: 1.5rem 1.5rem 0 0;
   }

   .arrowLeft {
      position: absolute;
      left: 0;
      bottom: 0;
      margin: 0 0 30rem 6rem;
   }
   .arrowRight {
      position: absolute;
      right: 0;
      bottom: 0;
      margin: 0 6rem 30rem 0;
   }

   div {
      position: absolute;
      background: rgba(255, 255, 255, 0.5);
      display: flex;
      justify-content: center;
      padding-left: 15rem;
      left: 0;
      bottom: 0;
      width: 105.6rem;
      height: 24rem;
      flex-direction: column;
      margin-bottom: 0.7rem;

      h1 {
         font: 500 4rem Poppins;
      }

      p {
         font: 300 2rem Roboto;
      }

      a {
         margin-top: 3rem;
         background: var(--color-primary);
         width: 13rem;
         height: 4.5rem;
         color: var(--color-text-in-primary);
         border-radius: 0.5rem;
         border: 0.2rem var(--color-primary) solid;
         transition: background-color 0.2s linear;
         text-decoration: none;
         padding: 0.7rem 1.5rem;
         text-align: center;
         &:hover{
            cursor: pointer;
            background: var(--color-primary-dark);
            color: var(--color-text-in-primary);
         }
      }
   }
`;
