// src/components/TopBar/TopBar.styles.ts
import styled from "styled-components";

export const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 20px;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
  }
`;

export const AddButton = styled.button`
  margin-left: auto;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.headerBackground};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AvatarInitial = styled.span`
  font-size: 18px;
`;

export const LangContainer = styled.div`
  position: relative;
`;

export const LangButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }

  svg {
    vertical-align: middle;
  }
`;

export const LangMenu = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background: ${({ theme }) => theme.background};
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const LangOption = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  width: 100%;
  padding: 8px 12px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }

  font-size: 14px;
`;

export const ToggleThemeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => (theme.mode === "dark" ? "#1f1f1f" : "#ffffff")};
  border: 1px solid ${({ theme }) => (theme.mode === "dark" ? "#555" : "#ccc")};
  border-radius: 15px;
  padding: 6px 12px;
  color: ${({ theme }) => (theme.mode === "dark" ? "#eee" : "#333")};
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    background: ${({ theme }) =>
      theme.mode === "dark" ? "#2c2c2c" : "#f0f0f0"};
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
