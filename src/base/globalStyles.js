import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   html,
   html *,
   html *::before,
   html *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
   }
   body {
      ${({ theme }) => theme.fonts.nunitoSans};

      font-size: 1rem;
      line-height: 140%;
      background-color: ${({ theme }) => theme.colors.secondary50};
   }
   ul {
      list-style: none;
   }
   button {
      ${({ theme }) => theme.fonts.nunitoSans};

      border: none;
      cursor: pointer;
      font-weight: 600;
      outline: none;
   }
   a {
      text-decoration: none;
      color: inherit;
   }
   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      ${({ theme }) => theme.fonts.crimsonPro};

      font-weight: 600;
      letter-spacing: 0.02em;
   }
   h1 {
      font-size: 3rem;
      line-height: 120%;
   }
   h2 {
      font-size: 2.5rem;
      line-height: 120%;
   }
   h3 {
      font-size: 2.0625rem;
      line-height: 120%;
   }
   h4 {
      font-size: 1.75rem;
      line-height: 120%;
   }
   h5 {
      font-size: 1.4375rem;
      line-height: 120%;
   }
   h6 {
      font-size: 1.1875rem;
      line-height: 120%;
   }
`;

export default GlobalStyles;
