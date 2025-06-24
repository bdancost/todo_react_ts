import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;

  button {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.text};
    padding: 6px 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;

    &.ativo {
      background-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.background};
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
