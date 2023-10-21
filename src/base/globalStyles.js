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
      ${({ theme }) => theme.mixins.text16};
      ${({ theme }) => theme.fonts.nunitoSans};
      
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
   h6,
   .display1,
   .display2 {
      ${({ theme }) => theme.fonts.crimsonPro};

      font-weight: 600;
      letter-spacing: 0.02em;
   }
   .display1 {
      ${({ theme }) => theme.mixins.text72};
   }
   .display2 {
      ${({ theme }) => theme.mixins.text60};
   }
   h1 {
      ${({ theme }) => theme.mixins.text48};
   }
   h2 {
      ${({ theme }) => theme.mixins.text40};
   }
   h3 {
      ${({ theme }) => theme.mixins.text33};
   }
   h4 {
      ${({ theme }) => theme.mixins.text28};
   }
   h5 {
      ${({ theme }) => theme.mixins.text23};
   }
   h6 {
      ${({ theme }) => theme.mixins.text19};
   }
`;

export default GlobalStyles;
