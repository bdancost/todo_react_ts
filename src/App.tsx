import { useEffect, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "./App.styles";

const App = () => {
  const [list, setList] = useState<Item[]>(() => {
    const saved = localStorage.getItem("todoList");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Erro ao fazer parse do localStorage:", e);
        return [];
      }
    }
    return [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Salva sempre que mudar
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  const handleAddTask = (taskName: string) => {
    const newTask: Item = {
      id: new Date().getTime(),
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
    const filteredList = list.filter((item) => item.id !== id);
    setList(filteredList);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: "16px",
              marginBottom: "10px",
            }}
          >
            {darkMode ? "🌞 Mudar para Claro" : "🌙 Mudar para Escuro"}
          </button>
          <AddArea onEnter={handleAddTask} />
          {list.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              onChange={handleTaskChange}
              onRemove={handleRemoveTask}
            />
          ))}
        </C.Area>
      </C.Container>
    </ThemeProvider>
  );
};

export default App;
