import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

  body {
    background: var(--color-background);
    color: var(--color-text);
    font-family: "Poppins", sans-serif;
  }

  a {
    color: var(--color-primary);
    text-decoration: underline;
  }

  a:hover {
    color: var(--color-secondary);
    text-decoration: none;
  }
`;
