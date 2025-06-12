import * as C from "./styles";
import { Item } from "../../types/Item";

type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void;
};

export const ListItem = ({ item, onChange }: Props) => {
  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("pt-BR");
  };
  return (
    <C.Container $done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => onChange(item.id, e.target.checked)}
      />
      <div>
        <label>{item.name}</label>
        <div style={{ fontSize: "12px", color: "#888" }}>
          Criado em: {formatDate(item.createdAt)}
        </div>
      </div>
    </C.Container>
  );
};
