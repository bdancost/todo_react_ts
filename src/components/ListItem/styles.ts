// components/ListItem/styles.ts
import styled from "styled-components";

type ContainerProps = {
  $done: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  background-color: #20212c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;

  input {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  label {
    color: #ccc;
    text-decoration: ${(props) => (props.$done ? "line-through" : "initial")};
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    margin-left: 10px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Modal = styled.div`
  background: #ffffff;
  padding: 32px;
  border-radius: 16px;
  width: 90%;
  max-width: 420px;
  text-align: center;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  .icon {
    font-size: 48px;
    margin-bottom: 12px;
  }

  h2 {
    margin-bottom: 8px;
    font-size: 22px;
    font-weight: 700;
    color: #222;
  }

  p {
    font-size: 16px;
    color: #555;
    margin-bottom: 24px;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin: 0 auto;
    width: 100%;
    max-width: 300px;
    padding: 0 20px;
    box-sizing: border-box;
  }
`;

export const ModalButton = styled.button<{ variant?: "danger" | "cancel" }>`
  background: ${(props) =>
    props.variant === "danger" ? "#e74c3c" : "#e0e0e0"};
  color: ${(props) => (props.variant === "danger" ? "#000" : "#000")};
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  transition: all 0.2s ease-in-out;

  svg {
    vertical-align: middle;
  }

  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }
`;

// Dentro de styles.ts
export const IconButton = styled.button`
  background: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const TaskContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: 16px;
    color: #ccc;
    word-break: break-word;
  }

  .createdAt {
    font-size: 12px;
    color: #888;
  }
`;

export const EditInput = styled.input`
  padding: 6px;
  font-size: 16px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #ccc;
`;
