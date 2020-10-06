import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

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
      --color-text-base: #121212;
      --color-text-in-primary: #ffffff;
   }

   @media (min-width: 700px) {
    :root{
        font-size: 62.5%
    }
}
`;
