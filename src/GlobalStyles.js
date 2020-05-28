import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

  body {
    background: var(--color-background);
    color: var(--color-text);
  }

  a {
    color: var(--color-link);
    text-decoration: underline;
  }

  a:hover {
    color: var(--color-secondary);
    text-decoration: none;
  }
`;
