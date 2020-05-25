import styled from 'styled-components';

export const StyledToggle = styled.button`
    width: 150px;
    height: 40px;
    border-radius: 10px;
    position: fixed;
    top: 100px;
    right: 20px;
    z-index: 1000;
    background: var(--color-text);
    color: var(--color-background);
    @media (max-width: 425px) {
      display: none;
  }
`;
