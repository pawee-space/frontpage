import styled from 'styled-components';

export const HomeContainer = styled.div`
   margin: 5rem 4.5rem 0 4.5rem;
   height: 80rem;
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
   align-items: center;
`;

export const ButtonsContainer = styled.div`
   a {
      background: var(--color-primary);
      width: 13rem;
      height: 4.5rem;
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

      & + a {
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

export const DataSection = styled.div`
   height: 94rem;
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

export const FeatureSection = styled.div`
   background: var(--color-background-darker);
   height: 90rem;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   h1 {
      font: 500 4.5rem Poppins;
      max-width: 90rem;
      text-align: center;
      line-height: 5rem;
   }

   p {
      margin-top: 1rem;
      font: 300 2.8rem Roboto;
      text-align: center;
      color: var(--color-text-complement);
   }

   button {
      margin-top: 5rem;
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
   }

   div {
      margin-top: 7rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      div {
         flex-direction: column;
         background: var(--color-background);
         padding: 2.5rem 0;
         border-radius: 2rem;
         box-shadow: 0 0 1rem 1rem var(--color-dark-shadow);
         transition: box-shadow 0.2s;

         img {
            width: 10rem;
         }

         h1 {
            margin-top: 3rem;
            font-size: 2.5rem;
         }

         p {
            font: 500 2rem Roboto;
            width: 30rem;
         }

         & + div {
            margin-left: 10rem;
         }
      }
   }
`;

export const FaqSection = styled.div`
   height: 90rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   h1 {
      font: 500 5rem Poppins;
   }
   p {
      font: 300 3rem Roboto;
      margin-bottom: 10rem;
   }
`;

export const Question = styled.div`
      border: 0.2rem var(--color-primary) solid;
      border-radius: 1rem;
      width: 80rem;
      height: 12rem;
      display: flex;
      align-items: center;
      padding: 3rem;
      transition: transform 0.2s;
      cursor: pointer;

      a {
         font: 300 2.8rem Poppins;
         text-decoration: none;
         color: var(--color-text-base);
      }

      & + div {
         margin-top: 3rem;
      }

      &:hover {
         transform: translateX(10px);
      }
`;

export const Footer = styled.div`
   background: var(--color-background-footer);
   height: 13rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 10rem;

   a {
      color: var(--color-text-in-primary);
      text-decoration: none;

      img {
      transition: transform 0.2s;
         height: 2.5rem;

         &:hover {
            transform: translateY(-10px);
         }
      }
   }

   span {
      font: 300 1.8rem Roboto;
      color: var(--color-background-darker);
   }

   div {
      a + a {
         margin-left: 8rem;
      }
   }
`;
