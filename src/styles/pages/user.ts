import styled from 'styled-components';

const cover = 'https://images.unsplash.com/photo-1516214104703-d870798883c5';

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
   max-width: 1200px;
`;

export const HeaderContent = styled.div`
   position: relative;

   .background {
      background: var(--color-background-footer);
      background: url('https://images.unsplash.com/photo-1516214104703-d870798883c5') no-repeat center;
      background-size: cover;
      width: 100%;
      height: 25rem;
      border-radius: 0 0 1rem 1rem;
      position: relative;
      cursor: pointer;

      .changeCover {
         background: rgba(187, 187, 187, 0.17);
         width: 3rem;
         height: 3rem;
         border-radius: 50%;
         display: flex;
         justify-content: center;
         align-items: center;
         color: var(--color-text-in-primary);
         position: absolute;
         bottom: 1.5rem;
         right: 1.5rem;
      }
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
