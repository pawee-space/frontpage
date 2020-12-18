import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   max-width: 900px;
   height: auto;
   background: var(--color-text-in-primary);
   border-radius: 1rem;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   padding: 2rem 2rem;
   margin-bottom: 2rem;

   form {
      width: 100%;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;

      .avatar {
         width: 6rem;
         height: 6rem;
         border-radius: 3rem;
         background: var(--color-background-darker);
      }

      input {
         flex: 1;
         margin: 0 1rem;
      }
   }

   a {
      margin-left: auto;
   }

`;
