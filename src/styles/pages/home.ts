import styled, { css } from 'styled-components';

interface HeaderProps {
   windowActive: string;
}

export const Container = styled.div`
   height: 100vh;
   min-height: 90rem;
   display: flex;
   flex-direction: column;
   align-items: center;
`;
export const Header = styled.div<HeaderProps>`
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
      button, img + img {
         margin-left: 3rem;
      }
   }

   button {
      font: 500 2rem Poppins;
      text-decoration: none;
      color: var(--color-text-inactive);

      &:hover {
         cursor: pointer;
      }
   }

   ${(props) => props.windowActive === 'dashboard'
      && css`
         .dashboard{
            color: var(--color-text-base);
         }

         .dashboard:after {
            content: '';
            background: var(--color-primary);
            width: auto;
            height: 0.4rem;
            display: flex;
            flex-direction: column;
            border-top-left-radius: 0.4rem;
            border-radius: 0.4rem;
         }
      `}

   ${(props) => props.windowActive === 'board'
      && css`
         .board{
            color: var(--color-text-base);
         }

         .board:after {
            content: '';
            background: var(--color-primary);
            width: auto;
            height: 0.4rem;
            display: flex;
            flex-direction: column;
            border-top-left-radius: 0.4rem;
            border-radius: 0.4rem;
         }
      `}
   ${(props) => props.windowActive === 'about'
      && css`
         .about{
            color: var(--color-text-base);
         }

         .about:after {
            content: '';
            background: var(--color-primary);
            width: auto;
            height: 0.4rem;
            display: flex;
            flex-direction: column;
            border-top-left-radius: 0.4rem;
            border-radius: 0.4rem;
         }
      `}
`;

// Dashboard
export const Main = styled.div`
   width: 100%;
   height: 100rem;
   display: flex;
   justify-content: start;
   align-items: center;
   flex-direction: column;

   h1 {
      margin-top: 5rem;
      font: 500 4rem Poppins;
   }

`;

export const SlideContainer = styled.div`
   position: relative;
   width: 100%;
   height: 65rem;
`;

// Board

export const BoardContainer = styled.div`
   width: 95%;
   height: auto;
   margin-top: 6rem;
   display: flex;
   flex-direction: column;

   h1 {
      margin-top: 3rem;
      color: var(--color-text-base);
      font: 500 2.5rem Poppins;
   }
`;

export const InputsContainer = styled.div`
   display: flex;
   flex-direction: row;
`;
export const Filter = styled.div`
   background: var(--color-background-boxes);
   width: auto;
   height: 4rem;
   border-radius: 3rem;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 1.5rem;
   margin-left: 2rem;

   &:hover {
      cursor: not-allowed;
   }

   p {
      color: var(--color-placeholders-box);
      font: 400 1.4rem Poppins;
      margin: 0 2rem;
   }

   svg {
      color: var(--color-text-inactive);
      stroke-width: 0.2rem;
      font-size: 2rem;
   }
`;

export const SearchInput = styled.div`
   background: var(--color-background-boxes);
   width: auto;
   height: 4rem;
   border-radius: 3rem;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 1.5rem;

   input {
      margin-left: 2rem;

      &::placeholder {
         color: var(--color-placeholders-box);
         font: 400 1.4rem Poppins;
      }
   }

   svg {
      color: var(--color-text-inactive);
      stroke-width: 0.2rem;
      font-size: 2rem;
   }
`;

export const Posts = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   margin: 5rem 0;
   width: 100%;
   height: 150rem;
   overflow-Y: auto;
   overflow-X: hidden;

   @media(max-width: 1130px){
      grid-template-columns: 1fr;
      padding: 0 10rem;
   }
`;
// About

export const AboutContainer = styled.div`

`;
