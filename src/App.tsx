import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Sun, Moon, ListTodo } from "lucide-react";

import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";
import { lightTheme, darkTheme, GlobalStyle } from "./App.styles";
import { translations, Idioma } from "./i18n/translations";
import { FiltroArea } from "./components/FiltroArea";
import { Dashboard } from "./components/Dashboards/Dashboard";

const App = () => {
  const [idioma, setIdioma] = useState<Idioma>(() => {
    return (localStorage.getItem("idioma") as Idioma) || "pt";
  });
  const t = translations[idioma];

  const [list, setList] = useState<Item[]>(() => {
    const saved = localStorage.getItem("todoList");
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [filtro, setFiltro] = useState<"todas" | "pendentes" | "concluidas">(
    "todas"
  );

  const getListaFiltrada = () => {
    switch (filtro) {
      case "pendentes":
        return list.filter((item) => !item.done);
      case "concluidas":
        return list.filter((item) => item.done);
      default:
        return list;
    }
  };

  // Persistência no localStorage
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("idioma", idioma);
  }, [idioma]);

  // Manipulação das tarefas
  const handleAddTask = (taskName: string) => {
    const newTask: Item = {
      id: Date.now(),
      name: taskName,
      done: false,
      createdAt: new Date().toISOString(),
    };
    setList((prev) => [...prev, newTask]);
  };

  const handleTaskChange = (id: number, done: boolean) => {
    setList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done } : item))
    );
  };

  const handleRemoveTask = (id: number) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEditTask = (id: number, newName: string) => {
    setList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, name: newName } : item))
    );
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <C.Container>
        <C.TopBar>
          <C.ToggleThemeButton onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? (
              <Sun color="#f1c40f" size={20} />
            ) : (
              <Moon color="#333" size={20} />
            )}
          </C.ToggleThemeButton>

          <C.LangSelect
            value={idioma}
            onChange={(e) => setIdioma(e.target.value as Idioma)}
          >
            <option value="pt">🇧🇷</option>
            <option value="en">🇺🇸</option>
            <option value="es">🇪🇸</option>
          </C.LangSelect>
        </C.TopBar>

        <C.Area>
          <C.Header>
            <ListTodo
              size={30}
              color="#fff"
              style={{ marginRight: "10px", marginTop: "4px" }}
            />
            {t.title}
          </C.Header>

          <FiltroArea filtro={filtro} setFiltro={setFiltro} t={t} list={list} />

          <AddArea onEnter={handleAddTask} t={t} />
          {getListaFiltrada().map((item) => (
            <ListItem
              key={item.id}
              item={item}
              onChange={handleTaskChange}
              onRemove={handleRemoveTask}
              onEdit={handleEditTask}
              t={t}
            />
          ))}
        </C.Area>
      </C.Container>
      {list.length > 0 && <Dashboard list={list} />}
    </ThemeProvider>
  );
};

export default App;
