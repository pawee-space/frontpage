import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   height: 100vh;
   align-items: stretch;
   background: var(--color-background-darker);
`;

export const Content = styled.div`
   display: flex;
   background: var(--color-background-darker);
   width: 130rem;
   justify-content: center;
   align-items: center;

   form {
      background: var(--color-background);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5rem 2.5rem;
      border-radius: 1.3rem;
      box-shadow: 0 0 1rem 1rem rgba(136, 136, 136, 0.2);
      width: 45rem;

      h1 {
         font: 500 4rem Poppins;
      }

      span {
         margin: 3rem 0 1rem 0;
         font: 300 1.3rem Roboto;
         width: 90%;
      }

      div {
         margin-top: 1rem;
         display: flex;
         align-items: center;
         justify-content: flex-start;
         width: 90%;

         p {
            margin-left: 0.5rem;
            font: 300 1.3rem Roboto;
            flex: 1;
         }

         a {
            font: 300 1.3rem Roboto;
            text-decoration: none;
            color: var(--color-primary);
         }

         input {
            -webkit-appearance: none;
            border-radius: 1rem;
            border: 0.1rem var(--color-background-darker) solid;
            padding: 9px;
            border-radius: 3px;
            display: inline-block;
            position: relative;

            &:checked {
               background-color: var(--color-primary);
               border: 0.1rem var(--color-primary) solid;
            }

            &:focus {
               border: 0.1rem var(--color-primary) solid;
            }
         }

         button {
            margin: 5rem 0 1rem 0;
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

         & + div {
            margin-top: 1rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
         }

      }
   }

   @media (max-width: 850px){

      form {
         height: auto;
         padding: 2rem 2.5rem;
         width: 100vw;
         border-radius: 0;
      }
   }

   @media (max-width: 530px){
      form {
         div > p, div > a {
            font: 300 1rem Roboto;
         }
      }
   }


`;

export const Aside = styled.div`
   flex: 1;
   min-width: 40rem;
   display: flex;
   justify-content: flex-end;
   flex-direction: column;
   align-items: center;
   border-radius: 0 1.2rem 1.2rem 0;
   background: var(--color-background);

   div {
      margin: 30rem 0 5rem 0;
      display: flex;
      align-items: center;

      p {
         margin-left: 1.5rem;
         max-width: 20rem;
      }
   }

   @media (max-width: 950px){
      display: none;
   }

`;
