import { useEffect, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

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

  // Salva sempre que mudar
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

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
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
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
  );
};

export default App;
