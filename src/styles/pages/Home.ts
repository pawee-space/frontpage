import styled from 'styled-components';

export const HomeContainer = styled.div`
   margin: 50px 45px 0 45px;
   height: 100vh;
   display: grid;
   grid-template-columns: 50% 50%;
   grid-template-rows: 6rem auto;
   grid-template-areas:
      "top top"
      "left right";
`;

export const Header = styled.div`
   grid-area: top;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   img {
   }
`;

export const ButtonsContainer = styled.div`
   button {
      background: var(--color-primary);
      width: 13rem;
      height: 4.5rem;
      color: var(--color-text-in-primary);
      border-radius: 0.5rem;
      border: 0.2rem var(--color-primary) solid;
      transition: background-color 0.2s linear;

      &:hover{
         cursor: pointer;
         background: var(--color-primary-dark);
         color: var(--color-text-in-primary);
      }

      & + button {
         margin-left: 1rem;
         background: none;
         color: var(--color-primary);
      }

   }
`;

export const Main = styled.div`
   grid-area: left;
   display: flex;
   flex-direction: column;
   justify-content: center;

   div {
      margin-top: -15rem;
      h1 {
         font: 500 7rem Poppins;
         max-width: 50rem;
         line-height: 7rem;
      }

      p {
         margin-top: 2rem;
         font: 300 2.8rem Roboto;
         color: var(--color-text-complement)
      }

      button {
         margin-top: 2rem;
         background: var(--color-primary);
         width: 13rem;
         height: 4.5rem;
         color: var(--color-text-in-primary);
         border-radius: 0.5rem;
         transition: background-color 0.2s linear;

         &:hover{
            cursor: pointer;
            background: var(--color-primary-dark);
         }
      }
   }
`;

export const ImageContainer = styled.div`
   grid-area: right;
   img {
      margin: 13rem 0 0 7rem;
   }
`;

export const DataContent = styled.div`
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   h1 {
      font: 500 5rem Poppins;
      line-height: 7rem;
   }

   p {
      font: 300 2.8rem Roboto;
      max-width: 55rem;
      text-align: center;
      color: var(--color-text-complement)
   }

   div {
      margin-top: 5rem;
      display: flex;
      width: 120rem;
      justify-content: space-between;
      align-items: center;
      div {
         flex-direction: column;

         h1 {
            margin-top: 1.5rem;
         }

         p {
            margin-top: 1.5rem;
         }
      }
   }
`;
