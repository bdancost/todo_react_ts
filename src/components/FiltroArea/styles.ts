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
      background-color: ${({ theme }) => theme.primary || theme.text};
      color: ${({ theme }) => theme.background};
      font-weight: bold;
    }

    &:hover {
      opacity: 0.8;
    }

    .badge {
      background-color: ${({ theme }) => theme.badge || "#ddd"};
      color: ${({ theme }) => theme.badgeText || "#333"};
      font-size: 12px;
      padding: 2px 6px;
      border-radius: 999px;
      margin-left: 5px;
    }

    .badge.pending {
      background-color: #f39c12;
      color: #fff;
    }

    .badge.done {
      background-color: #2ecc71;
      color: #fff;
    }
  }
`;
