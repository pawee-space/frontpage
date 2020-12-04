import styled, { css } from 'styled-components';

interface HeaderProps {
   windowActive: string;
}

interface PostProps {
   background: string;
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
      justify-content: center;
      align-items: center;

      svg {
         font-size: 3rem;

         &:hover {
            cursor: pointer;
         }
      }

      & + div {
         margin-left: 1.5rem;
      }


      img {
         margin: 0 2rem 0 3rem;
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
   width: 75%;
   height: auto;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   padding-bottom: 6rem;
`;

export const SlideHeader = styled.div`
   margin: 8rem 0 3rem 0;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: row;

   h1 {
      font: 500 2.5rem Poppins;
   }

   div > button {
      background: var(--color-primary);
      width: 3rem;
      height: 3rem;
      /* display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row; */
      color: var(--color-text-in-primary);
      font-size: 2.5rem;
      border-radius: 50%;

      &:hover {
         cursor: pointer;
      }

      & + button {
         margin-left: 4rem;
      }
   }

`;

export const PostContainer = styled.div`
   padding-top: 4rem;
   width: 100%;
   display: flex;
   justify-content: space-evenly;
`;

export const PostCard = styled.div<PostProps>`
   width: 35rem;
   height: auto;
   background: var(--color-text-in-primary);
   border-radius: 1rem;
   box-shadow: 0 0 1rem 0.5rem var(--color-dark-shadow);
   display: flex;
   justify-content: start;
   align-items: center;
   flex-direction: column;
   padding-bottom: 1.2rem;

   h2 {
      font: 500 2.4rem Poppins;
      width: 100%;
      padding: 2.5rem 0 0 2rem;
   }

   p {
      font: 400 1.6rem Roboto;
      width: 100%;
      padding: 0 2rem;
   }

   a {
      margin-top: 2rem;
   }

   .background {
      background: url(${(props) => props.background}) no-repeat;
      background-size: cover;
      border-radius: 1rem 1rem 0 0;
      width: 100%;
      height: 25rem;
   }
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

// Profile

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
