// src/pages/Profile.tsx
import { useAuth } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth, storage } from "../services/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const { user } = useAuth();
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadPhoto = async () => {
    if (!file || !auth.currentUser) return;

    setLoading(true);
    setMensagem("");

    try {
      const fileRef = ref(storage, `avatars/${auth.currentUser.uid}`);
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);

      await updateProfile(auth.currentUser, {
        photoURL: url,
      });

      setPhotoURL(url);
      setMensagem("Foto atualizada com sucesso!");
    } catch (error) {
      console.error("Erro ao fazer upload:", error);
      setMensagem("Erro ao atualizar a foto.");
    }

    setLoading(false);
  };

  return (
    <div style={estilo.container}>
      <h2>Meu Perfil</h2>
      {user && (
        <>
          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <img
            src={photoURL || "https://via.placeholder.com/150"}
            alt="Foto de perfil"
            style={estilo.img}
          />

          <input type="file" accept="image/*" onChange={handleFileChange} />
          <button
            onClick={handleUploadPhoto}
            disabled={loading || !file}
            style={estilo.botao}
          >
            {loading ? "Enviando..." : "Salvar Nova Foto"}
          </button>

          {mensagem && <p>{mensagem}</p>}

          <button onClick={() => navigate("/")} style={estilo.voltar}>
            Voltar
          </button>
        </>
      )}
    </div>
  );
};

const estilo = {
  container: {
    maxWidth: "400px",
    margin: "100px auto",
    padding: "20px",
    textAlign: "center" as const,
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  img: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover" as const,
    marginBottom: "10px",
  },
  botao: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#0d6efd",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  voltar: {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
