import { useEffect, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "./App.styles";
import { Sun, Moon } from "lucide-react";

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
          <C.Header>Lista de Tarefas</C.Header>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                background: darkMode ? "#FFF" : "#333",
                border: darkMode ? "1px solid #fff" : "1px solid #000",
                borderRadius: "15px",
                padding: "5px 10px",
                color: darkMode ? "#000" : "#FFF",
                cursor: "pointer",
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
                marginTop: "10px",
                transition:
                  "background-color 0.3s, color 0.3s, border-color 0.3s",
              }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
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
