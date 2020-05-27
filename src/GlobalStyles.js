import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

  body {
    background: var(--color-background);
    color: var(--color-text);
  }

  a {
    color: var(--color-link);
  }

  a:hover {
    color: var(--color-secondary);
  }
`
