import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--color-text);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 990px) {
    width: 300px;
  }
  a {
    font-size: 1.3rem;
    text-transform: uppercase;
    padding: 1.5rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: var(--color-background);
    text-decoration: underline;
    transition: color 0.3s linear;
    @media (max-width: 990px) {
      font-size: 1.3rem;
      text-align: center;
    }
    &:hover {
      color: var(--color-secondary);
    }
  }
`;
