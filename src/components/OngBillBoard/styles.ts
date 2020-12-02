import styled from 'styled-components';

interface ContainerProps {
  width: string
  height: string
  bg: string
}

export const Container = styled.div<ContainerProps>`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto:wght@300&display=swap');

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: inline-block;
  position: relative;
  border-radius: 1.5rem;

  #background {
   width: 100%;
   height: 100%;
   background: url(${(props) => props.bg}) no-repeat center;
   background-size: cover;
   border-radius: 1.5rem;
   position: absolute;
  }

  #card {
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    left: 0;
    bottom: 0;
    padding-left: 10rem;
    width: 100%;
    /* width: Math(${(props) => props.width} - 10rem); */
    height: 40%;
    flex-direction: column;
    border-radius: 0 0 1.5rem 1.5rem;
    z-index: 1;

    h1 {
      font: 500 40px Poppins;
      margin: 0;
    }

    p {
      font: 300 20px Roboto;
      margin: 0;
    }

    a {
      background: #663399;
      margin-top: 10px;
      width: 100px;
      height: 20px;
      color: #ffffff;
      border-radius: 0.5rem;
      border: 0.2rem #663399 solid;
      transition: background-color 0.2s linear;
      text-decoration: none;
      padding: 0.7rem 1.5rem;
      text-align: center;
      box-sizing: unset;
      &:hover {
        cursor: pointer;
        background: #5c2e8a;
        color: #ffffff;
      }
    }
  }
`;

export const IconLeft = styled.img`
  position: relative;
  left: 0;
  bottom: 0;
  margin: 0 0 30rem 6rem;
`;
export const IconRight = styled.img`
  position: relative;
  right: 0;
  bottom: 0;
  margin: 0 6rem 30rem 0;
`;
