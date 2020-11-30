import styled from 'styled-components';

interface ContainerProps{
   postImage: string;
   ongImage: string;
}

export const Container = styled.div<ContainerProps>`
   display: flex;
   background: #FFF;
   width: 60rem;
   height: 23rem;
   border-radius: 1rem;
   margin: 4rem 2rem;
   box-shadow: 0 0 1rem 1rem var(--color-dark-shadow);
   font: 500 1rem Poppins;

   .section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
   }

   .left {
      width: 15rem;
      border-right: 0.1rem #CCCCCC solid;

      .ongImage{
         width: 9rem;
         height: 9rem;
         border-radius: 50%;
         background: url(${(props) => props.ongImage}) no-repeat;
         background-size: cover;
         margin: 1rem;
      }
      svg {
         margin-right: 0.3rem;
         font-size: 1.3rem;
         color: var(--color-primary);
      }
      div > div{
         display: flex;
         align-items: center;
         span {
            font: 500 1rem Poppins;
         }
         .ongName {
            font: 600 1.2rem Poppins;
         }
      }
   }

   .middle {
      max-width: 28rem;

      padding-left: 3rem;
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;

      h2 {
         font: 500 2rem Poppins;
      }

      p {
         font: 400 1.5rem Roboto;
      }

      a {
         width: 13rem;
         height: 3.5rem;
         border-radius: 2rem;
         display: flex;
         justify-content: center;
         align-items: center;
         text-decoration: none;
         font: 400 1.2rem Poppins;
         color: var(--color-text-in-primary);
         background: var(--color-primary);
      }
   }

   .right {
      display: flex;
      align-items: flex-start;

      .postImage{
         width: 12rem;
         height: 12rem;
         border-radius: 0.2rem;
         background: url(${(props) => props.postImage}) no-repeat;
         background-size: cover;
         margin: 1rem 0;
      }

      svg {
         color: var(--color-primary);
         font-size: 1.4rem;
         stroke-width: 0.3rem;
         margin-right: 0.2rem;
      }

      span {
         margin-right: 0.2rem;
      }

      div {
         display: flex;
         align-items: center;
      }

      p {
         & + p {
            margin-left: 0.5rem;
         }

         &:before{
            content: '#';
         }

         color: var(--color-text-unactive);
      }
   }
`;
