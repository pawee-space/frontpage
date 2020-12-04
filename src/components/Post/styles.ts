import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: auto;
   background: var(--color-text-in-primary);
   border-radius: 1rem;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   padding: 3rem 0;

   .header {
      width: 90%;
      height: 10rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg {
         font-size: 4rem;
         color: var(--color-text-complement);
          &:hover {
             cursor: pointer;
          }
      }

      .avatar {
         width: 10rem;
         height: 10rem;
         background: var(--color-background-darker);
         border-radius: 50%;
      }

      div {
         display: flex;
         justify-content: space-between;
         align-items: center;

         div {
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            span {
               font: 500 1.6rem Roboto;

               & + span {
                  font: 700 1rem Roboto;
               }
            }
         }
      }
   }

   .image {
      height: 35rem;
      width: 90%;
      background: url('https://images.unsplash.com/photo-1504722975310-dd49f8bd5953?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center;
      background-size: cover;
      border-radius: 1rem;
      margin: 2rem 0;
   }

   .bio {
      width: 90%;
      height: 6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
      background: var(--color-background-darker);
      border-radius: 1rem;

      p {
         font: 300 1.5rem Roboto;
         flex: 1;
      }

      a {
         font: 400 1.5rem Roboto;
         text-decoration: none;
         color: var(--color-background-footer);
      }
   }
`;
