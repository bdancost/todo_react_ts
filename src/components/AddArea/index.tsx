import { useState, KeyboardEvent } from "react";
import * as C from "./styles";
import { Input } from "../../App.styles";

type Props = {
  onEnter: (taskName: string) => void;
  t: {
    placeholder: string;
  };
};

export const AddArea = ({ onEnter, t }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText(""); // Clear the input field after adding the task
    }
  };

  return (
    <C.Container>
      <div className="image">╋</div>
      <Input
        type="text"
        placeholder={t.placeholder}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
};
