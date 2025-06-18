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
        <C.Area>
          <C.Header>
            <ListTodo
              size={30}
              color="#fff"
              style={{ marginRight: "10px", marginTop: "4px" }}
            />
            Lista de Tarefas
          </C.Header>

          <C.ToggleThemeButton onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? (
              <Sun color="#f1c40f" size={20} />
            ) : (
              <Moon color="#333" size={20} />
            )}
          </C.ToggleThemeButton>

          <AddArea onEnter={handleAddTask} />
          {list.map((item) => (
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
