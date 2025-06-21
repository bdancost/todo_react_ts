import { useState } from "react";
import * as C from "./styles";
import { Item } from "../../types/Item";
import { Trash2, X, Pencil, Check } from "lucide-react";

type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void;
  onRemove: (id: number) => void;
  onEdit: (id: number, newName: string) => void;
};

export const ListItem = ({ item, onChange, onRemove, onEdit }: Props) => {
  const [confirming, setConfirming] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(item.name);

  const handleSaveEdit = () => {
    if (newName.trim() !== "") {
      onEdit(item.id, newName.trim());
      setIsEditing(false);
    }
  };

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
      <C.TaskContent>
        {isEditing ? (
          <C.EditInput
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSaveEdit();
              if (e.key === "Escape") {
                setIsEditing(false);
                setNewName(item.name);
              }
            }}
            autoFocus
          />
        ) : (
          <>
            <label>{item.name}</label>
            <div className="createdAt">
              Criado em: {formatDate(item.createdAt)}
            </div>
          </>
        )}
      </C.TaskContent>

      {isEditing ? (
        <button onClick={handleSaveEdit} title="Salvar edição">
          <C.IconButton>
            <Check size={20} color="#27ae60" />
          </C.IconButton>
        </button>
      ) : (
        <button onClick={() => setIsEditing(true)} title="Editar tarefa">
          <C.IconButton>
            <Pencil size={20} color="#3498db" />
          </C.IconButton>
        </button>
      )}

      <button onClick={() => setConfirming(true)} title="Remover tarefa">
        <C.IconButton>
          <Trash2 size={20} color="#e74c3c" />
        </C.IconButton>
      </button>

      {confirming && (
        <C.Overlay>
          <C.Modal>
            <div className="icon">🗑️</div>
            <h2>Remover Tarefa</h2>
            <p>Você tem certeza que deseja remover esta tarefa da lista?</p>
            <div className="buttons">
              <C.ModalButton
                variant="danger"
                onClick={() => {
                  onRemove(item.id);
                  setConfirming(false);
                }}
              >
                <Trash2 size={18} />
                Sim
              </C.ModalButton>

              <C.ModalButton
                variant="cancel"
                onClick={() => setConfirming(false)}
              >
                <X size={18} />
                Não
              </C.ModalButton>
            </div>
          </C.Modal>
        </C.Overlay>
      )}
    </C.Container>
  );
};
