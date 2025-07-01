// src/components/TopBar/index.tsx
import React, { useRef, useEffect } from "react";
import {
  Avatar,
  AvatarImage,
  AvatarInitial,
  AvatarContainer,
  LangContainer,
  LangButton,
  LangMenu,
  LangOption,
} from "../../App.styles";

import { Globe, Moon, Sun } from "lucide-react";
import {
  AddButton,
  ToggleThemeButton,
  TopBar as TopBarContainer,
} from "../../App.styles";
import { useNavigate } from "react-router-dom";
import { Idioma } from "../../i18n/translations";

type Props = {
  user: any;
  logout: () => void;
  idioma: Idioma;
  setIdioma: React.Dispatch<React.SetStateAction<Idioma>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TopBar = ({
  user,
  logout,
  idioma,
  setIdioma,
  darkMode,
  setDarkMode,
}: Props) => {
  const [showLang, setShowLang] = React.useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleLanguageChange = (lang: Idioma) => {
    setIdioma(lang);
    localStorage.setItem("idioma", lang);
    setShowLang(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setShowLang(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <TopBarContainer>
      {user && (
        <AvatarContainer
          onClick={() => navigate("/profile")}
          style={{ cursor: "pointer" }}
        >
          {user.photoURL ? (
            <AvatarImage src={user.photoURL} alt="Avatar" />
          ) : (
            <Avatar>
              <AvatarInitial>
                {user.email?.charAt(0).toUpperCase()}
              </AvatarInitial>
            </Avatar>
          )}
        </AvatarContainer>
      )}

      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        {/* Botões Login / Registrar */}
        <div style={{ display: "flex", gap: "10px" }}>
          {!user && (
            <>
              <AddButton onClick={() => navigate("/login")}>Login</AddButton>
              <AddButton onClick={() => navigate("/register")}>
                Registrar
              </AddButton>
            </>
          )}
          {user && <AddButton onClick={logout}>Sair</AddButton>}
        </div>

        {/* Idioma e Darkmode empilhados */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <LangContainer ref={langRef}>
            <LangButton
              onClick={() => setShowLang((prev) => !prev)}
              aria-label="Selecionar idioma"
            >
              <Globe size={20} />
            </LangButton>
            {showLang && (
              <LangMenu>
                <LangOption onClick={() => handleLanguageChange("pt")}>
                  🇧🇷 Português
                </LangOption>
                <LangOption onClick={() => handleLanguageChange("en")}>
                  🇺🇸 English
                </LangOption>
                <LangOption onClick={() => handleLanguageChange("es")}>
                  🇪🇸 Español
                </LangOption>
              </LangMenu>
            )}
          </LangContainer>

          <ToggleThemeButton onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? (
              <Sun color="#f1c40f" size={20} />
            ) : (
              <Moon color="#333" size={20} />
            )}
          </ToggleThemeButton>
        </div>
      </div>
    </TopBarContainer>
  );
};
