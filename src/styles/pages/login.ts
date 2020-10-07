import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   height: 100vh;
   align-items: stretch;
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
      }

      div {
         margin-top: 1rem;
         display: flex;
         align-items: center;
         justify-content: space-between;
         width: 90%;

         p {
            font: 300 1.3rem Roboto;
         }

         a {
            font: 300 1.3rem Roboto;
            text-decoration: none;
            color: var(--color-primary);
         }

         input {
            border: 0.1rem var(--color-background-darker) solid;
            border-radius: 1rem;
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
`;

export const Aside = styled.div`
   flex: 1;
   display: flex;
   justify-content: flex-end;
   flex-direction: column;
   align-items: center;
   margin-bottom: 5rem;

   div {
      margin-top: 30rem;
      display: flex;
      align-items: center;

      p {
         margin-left: 1.5rem;
         max-width: 20rem;
      }
   }
`;
