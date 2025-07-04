import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ListTodo } from "lucide-react";

import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";
import { lightTheme, darkTheme, GlobalStyle } from "./App.styles";
import { translations, Idioma } from "./i18n/translations";
import { FiltroArea } from "./components/FiltroArea";
import { Dashboard } from "./components/Dashboards/Dashboard";
import {
  addTask,
  getTasksByUser,
  deleteTask,
  updateTaskStatus,
} from "./services/taskService";
import { useAuth } from "./context/AuthContext";
import { TopBar } from "./components/TopBar";
const App = () => {
  const { user, logout } = useAuth();

  useEffect(() => {
    const fetchTasks = async () => {
      if (user) {
        const tasks = await getTasksByUser(user.uid);
        setList(tasks);
      }
    };

    fetchTasks();
  }, [user]);

  useEffect(() => {
    if (!user) {
      setList([]); // Limpa as tarefas quando o usuário desloga
    }
  }, [user]);

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
  const handleAddTask = async (taskName: string) => {
    if (!user) {
      alert("Você precisa estar logado para adicionar tarefas.");
      return;
    }

    try {
      const taskId = await addTask(taskName, user.uid);

      const newTask: Item = {
        id: taskId,
        name: taskName,
        done: false,
        createdAt: new Date().toISOString(),
      };

      setList((prev) => [...prev, newTask]);
    } catch (error) {
      alert("Erro ao adicionar tarefa no Firestore.");
      console.error(error);
    }
  };

  const handleTaskChange = async (id: string, done: boolean) => {
    setList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done } : item))
    );

    await updateTaskStatus(id, done);
  };

  const handleRemoveTask = async (id: string) => {
    setList((prev) => prev.filter((item) => item.id !== id));
    await deleteTask(id);
  };

  const handleEditTask = (id: string, newName: string) => {
    setList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, name: newName } : item))
    );
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <C.Container>
        <TopBar
          user={user}
          logout={logout}
          idioma={idioma}
          setIdioma={setIdioma}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

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
