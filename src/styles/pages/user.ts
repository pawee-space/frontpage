import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: auto;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const ProfileContainer = styled.div`
   background: var(--color-background-darker);
   width: 80%;
   height: auto;
`;

export const HeaderContent = styled.div`
   position: relative;

   .background {
      background: var(--color-background-footer);
      width: 100%;
      height: 25rem;
      border-radius: 0 0 1rem 1rem;
   }

   .avatar {
      width: 15rem;
      height: 15rem;
      border-radius: 50%;
      background: var(--color-primary);

      img {
         width: 100%;
         height: 100%;
      }
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
   display: flex;
   flex-direction: column;
   justify-content: start;
   align-items: center;

   h2 {
      font: 500 3rem Poppins;
      margin-bottom: 2rem;
      width: 100%;
      max-width: 900px;
   }
`;
