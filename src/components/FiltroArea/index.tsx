import * as C from "./styles";

type Props = {
  filtro: "todas" | "pendentes" | "concluidas";
  setFiltro: (filtro: "todas" | "pendentes" | "concluidas") => void;
  t: Record<string, string>;
};

export const FiltroArea = ({ filtro, setFiltro, t }: Props) => {
  return (
    <C.Container>
      <button
        className={filtro === "todas" ? "ativo" : ""}
        onClick={() => setFiltro("todas")}
      >
        {t.all}
      </button>
      <button
        className={filtro === "pendentes" ? "ativo" : ""}
        onClick={() => setFiltro("pendentes")}
      >
        {t.pending}
      </button>
      <button
        className={filtro === "concluidas" ? "ativo" : ""}
        onClick={() => setFiltro("concluidas")}
      >
        {t.done}
      </button>
    </C.Container>
  );
};
