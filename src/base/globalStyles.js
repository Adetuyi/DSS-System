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
`;

export default GlobalStyles;
