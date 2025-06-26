import { useState } from "react";
import * as C from "./styles";
import { Item } from "../../types/Item";
import { Trash2, X, Pencil, Check, CheckCircle } from "lucide-react";
import { translations } from "../../i18n/translations";
import { Input } from "../../App.styles";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void;
  onRemove: (id: number) => void;
  onEdit: (id: number, newName: string) => void;
  t: (typeof translations)["pt"];
};

export const ListItem = ({ item, onChange, onRemove, onEdit, t }: Props) => {
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

  const checkVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -90 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 20 },
    },
    exit: { scale: 0, opacity: 0, rotate: 90, transition: { duration: 0.2 } },
  };

  const showConfetti = () => {
    const duration = 800;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 };

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;

      confetti({
        ...defaults,
        particleCount: 40,
        origin: {
          x: randomInRange(0.1, 0.9), // horizontal: espalhado
          y: Math.random() * 0.4, // vertical: sobe de vários pontos
        },
      });
    }, 150);
  };

  const playSound = () => {
    const audio = new Audio("/sounds/check.mp3");
    audio.volume = 0.4; // Ajuste o volume conforme necessário
    audio.play();
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    onChange(item.id, checked);

    // Se a tarefa acabou de ser marcada como concluída
    if (!item.done && checked) {
      playSound();
      showConfetti();
    }
  };

  return (
    <C.Container $done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={handleCheckboxChange}
      />
      <C.TaskContent>
        {isEditing ? (
          <Input
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
              {t.createdAt}: {formatDate(item.createdAt)}
            </div>
          </>
        )}

        <AnimatePresence>
          {item.done && (
            <motion.div
              key="check"
              variants={checkVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "4px",
              }}
            >
              <CheckCircle color="#2ecc71" size={22} />
            </motion.div>
          )}
        </AnimatePresence>
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
            <h2>{t.removeTitle}</h2>
            <p>{t.removeConfirm}</p>
            <div className="buttons">
              <C.ModalButton
                variant="danger"
                onClick={() => {
                  onRemove(item.id);
                  setConfirming(false);
                }}
              >
                <Trash2 size={18} />
                {t.btnYes}
              </C.ModalButton>

              <C.ModalButton
                variant="cancel"
                onClick={() => setConfirming(false)}
              >
                <X size={18} />
                {t.btnNo}
              </C.ModalButton>
            </div>
          </C.Modal>
        </C.Overlay>
      )}
    </C.Container>
  );
};
