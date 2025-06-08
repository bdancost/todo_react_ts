import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Estudar Ingles", done: false },
    { id: 2, name: "Estudar React", done: false },
  ]);
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
      </C.Area>
    </C.Container>
  );
};

export default App;
