import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: auto;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const ProfileContainer = styled.div`
   margin-top: 7rem;
   background: var(--color-background-darker);
   width: 80%;
   height: auto;
   border-radius: 1rem 1rem 0 0;
`;

export const HeaderContent = styled.div`
   position: relative;

   .background {
      background: var(--color-background-footer);
      width: 100%;
      height: 25rem;
      border-radius: 1rem;
   }

   .avatar {
      width: 15rem;
      height: 15rem;
      border-radius: 50%;
      background: var(--color-primary);
   }

   .info {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      bottom: -8rem;
      left: 10rem;

      span {
         margin-top: 1rem;
      }
   }
`;

export const ProfilePostsContainer = styled.div`
   margin-top: 13rem;
   width: 100%;
   padding: 0 10% 10rem 10%;

   h2 {
      font: 500 3rem Poppins;
      margin-bottom: 2rem;
   }
`;
