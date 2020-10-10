import styled from 'styled-components';

export const HomeContainer = styled.div`
   /* margin: 5rem 4.5rem 0 4.5rem; */
   height: 80rem;
   display: grid;
   grid-template-columns: 50% 50%;
   grid-template-rows: 6rem auto;
   grid-template-areas:
      "top top"
      "left right";

   @media(max-width: 850px) {
      display: flex;
      flex-direction: column;
      height: 37rem;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8rem;
   }

`;

export const Header = styled.div`
   grid-area: top;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   margin: 5rem 4.5rem 0 4.5rem;

   @media(max-width: 850px) {
      display: none;
   }
`;

export const HeaderMobile = styled.div`
   margin-top: 1rem;
   display: flex;
   align-items: center;

   img + img {
      margin-left: 1rem;
   }
   @media(min-width: 850px) {
      display: none;
   }
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
   margin: 5rem 4.5rem 0 4.5rem;

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
   @media(max-width: 850px) {
      margin: 5rem 2rem 0 2rem;
      div {
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: space-between;
         height: 22rem;

         h1 {
            font: 500 3.5rem Poppins;
            line-height: 3rem;
            text-align: center;
         }

         p {
            text-align: center;
            font: 300 1.5rem Roboto;
         }

         a {
            margin-top: 2rem;
         }
      }
   }
`;

export const ImageContainer = styled.div`
   grid-area: right;
   img {
      margin: 13rem 0 0 7rem;
      width: 34.871vw;
      min-width: 28.6rem;
   }

   @media(max-width: 850px) {
      display: none;
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
      text-align: center;
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
      width: 70%;
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

   a {

   }

   @media (max-width: 1200px){
      height: 140rem;

      div {
         flex-direction: column;
         margin-top: 0;

         div {
            width: 60rem;
            margin: 4rem 0;

            & + div {
               margin-left: 0rem;
            }
         }
      }
   }

   @media(max-width: 850px) {
      margin: 0 2rem;
      height: auto;

      h1 {
         font: 500 3rem Poppins;
         line-height: 3rem;
      }

      p {
         margin: 1.5rem 0;
         font: 300 1.8rem Roboto;
         max-width: none;
      }

      div {
         & > div {
            margin: 2rem 0;
            width: auto;
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

   @media (max-width: 1200px){
      height: 150rem;

      div {
         flex-direction: column;
         margin-top: 5rem;

         div {
            width: 60rem;
            padding: 4rem 0;

            & + div {
               margin-left: 0rem;
            }
         }
      }
   }

   @media(max-width: 850px) {
      height: auto;
      padding: 4rem 2rem 6rem 2rem;

      h1 {
         font: 500 2rem Poppins;
         line-height: 3rem;
      }

      p {
         margin: 1rem 0;
         font: 300 1.8rem Roboto;
         max-width: none;
      }

      button {
         display: none;
      }

      div {
         margin-top: 1rem;
         div {
            width: 95%;
            min-width: 18rem;
            height: 30rem;
            padding: 4rem 1rem;

            & + div {
               margin-top: 5rem;
               margin-left: 0rem;
            }

            p {
               width: auto;
               font: 300 1.5rem Roboto;
            }
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

   @media(max-width: 850px) {
      height: auto;
      text-align: center;
      padding: 4rem 1.5rem;

      h1 {
         font: 500 3rem Poppins;
         line-height: 3rem;
      }

      p {
         margin: 1.5rem 0;
         font: 300 1.8rem Roboto;
         max-width: none;
      }
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

   @media(max-width: 850px) {
      width: 80%;
      height: 11rem;
      justify-content: center;
      padding: 0 0.5rem;

      a {
         font: 300 1.6rem Poppins;
         text-decoration: none;
         color: var(--color-text-base);
      }
   }
`;

export const Footer = styled.div`
   background: var(--color-background-footer);
   height: 13rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 10vw;

   a {
      color: var(--color-text-in-primary);
      text-decoration: none;
      cursor: pointer;
   }
   div {
      display: flex;
      justify-content: space-between;
      width: 20%;

      a > img {
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

   @media(max-width: 850px) {
      height: auto;
      display: flex;
      flex-direction: column;
      padding: 1rem 0;

      a {
         font: 500 1.2rem Poppins;
      }

      .footer-logo {
         display: none;
      }

      .footer-social {
         display: none;
      }

      .footer-copyright {
         margin-top: 1rem;
         font: 300 1rem Roboto;
      }
   }
`;
