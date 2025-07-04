import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");

    try {
      await login(email, senha);
      navigate("/"); // Redireciona para a página principal
    } catch (err: any) {
      if (err.code === "auth/user-not-found") {
        setErro("Usuário não encontrado.");
      } else if (err.code === "auth/wrong-password") {
        setErro("Senha incorreta.");
      } else {
        setErro("Erro ao fazer login.");
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Entrar
        </button>
        {erro && <p style={styles.error}>{erro}</p>}
      </form>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: "400px",
    margin: "100px auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#0d6efd",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};
