import * as C from "./styles";
import { Item } from "../../types/Item";

type Props = {
  filtro: "todas" | "pendentes" | "concluidas";
  setFiltro: (filtro: "todas" | "pendentes" | "concluidas") => void;
  t: Record<string, string>;
  list: Item[];
};

export const FiltroArea = ({ filtro, setFiltro, t, list }: Props) => {
  const totalTarefas = list.length;
  const pendentes = list.filter((item) => !item.done).length;
  const concluidas = list.filter((item) => item.done).length;

  return (
    <C.Container>
      <button
        className={filtro === "todas" ? "ativo" : ""}
        onClick={() => setFiltro("todas")}
      >
        {t.all} ({totalTarefas})
      </button>
      <button
        className={filtro === "pendentes" ? "ativo" : ""}
        onClick={() => setFiltro("pendentes")}
      >
        {t.pending} ({pendentes})
      </button>
      <button
        className={filtro === "concluidas" ? "ativo" : ""}
        onClick={() => setFiltro("concluidas")}
      >
        {t.done} ({concluidas})
      </button>
    </C.Container>
  );
};
