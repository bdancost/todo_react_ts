import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Sun, Moon, ListTodo } from "lucide-react";

import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";
import { lightTheme, darkTheme, GlobalStyle } from "./App.styles";

const App = () => {
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
        <C.ToggleThemeButton onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? (
            <Sun color="#f1c40f" size={20} />
          ) : (
            <Moon color="#333" size={20} />
          )}
        </C.ToggleThemeButton>

        <C.Area>
          <C.Header>
            <ListTodo
              size={30}
              color="#fff"
              style={{ marginRight: "10px", marginTop: "4px" }}
            />
            Lista de Tarefas
          </C.Header>

          <C.Filtros>
            <button
              className={filtro === "todas" ? "ativo" : ""}
              onClick={() => setFiltro("todas")}
            >
              Todas
            </button>
            <button
              className={filtro === "pendentes" ? "ativo" : ""}
              onClick={() => setFiltro("pendentes")}
            >
              Pendentes
            </button>
            <button
              className={filtro === "concluidas" ? "ativo" : ""}
              onClick={() => setFiltro("concluidas")}
            >
              Concluídas
            </button>
          </C.Filtros>

          <AddArea onEnter={handleAddTask} />
          {getListaFiltrada().map((item) => (
            <ListItem
              key={item.id}
              item={item}
              onChange={handleTaskChange}
              onRemove={handleRemoveTask}
              onEdit={handleEditTask}
            />
          ))}
        </C.Area>
      </C.Container>
    </ThemeProvider>
  );
};

export default App;
