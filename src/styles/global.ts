import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      background: var(--color-background);
      color: var(--color-text-base);
   }

   body,
   input,
   button,
   textarea {
      font: 500 1.6rem Poppins;
      color: var(--color-text-base);
      border: none;
}

   :root{
      --color-background: #ebebeb;
      --color-primary: #663399;
      --color-primary-dark: #5C2E8A;
      --color-primary-darker: #52297A;
      --color-text-base: #121212;
      --color-text-in-primary: #ffffff;
      --color-text-complement: #444444;
   }

   @media (min-width: 700px) {
    :root{
        font-size: 62.5%
    }
}
`;
