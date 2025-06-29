import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import { Register } from "./pages/Register"; // importe sua página de registro
import { Login } from "./pages/Login"; // importe sua página de login
import { AuthProvider } from "./context/AuthContext"; // se usar contexto de autenticação

import reportWebVitals from "./reportWebVitals";
import { Profile } from "./pages/Profile"; // se tiver uma página de perfil

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        {" "}
        {/* somente se usar AuthContext */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          {/* Adicione outras rotas conforme necessário */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
