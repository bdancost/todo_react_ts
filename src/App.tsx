import { useEffect, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  // Carregar tarefas do localStorage
  useEffect(() => {
    const savedList = localStorage.getItem("todoList");
    if (savedList) {
      try {
        const parsedList: Item[] = JSON.parse(savedList);
        setList(parsedList);
      } catch (error) {
        console.error("Erro ao carregar tarefas:", error);
        localStorage.removeItem("todoList"); // limpa dados corrompidos
      }
    }
  }, []);

  // Salvar tarefas no localStorage sempre que mudar
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

    setList((prevList) => [...prevList, newTask]);
  };

  const handleTaskChange = (id: number, done: boolean) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, done } : item
    );
    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item) => (
          <ListItem key={item.id} item={item} onChange={handleTaskChange} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
