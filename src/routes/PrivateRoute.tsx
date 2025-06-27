import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const PrivateRoute = ({ children }: Props) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Carregando...</div>;

  return user ? <>{children}</> : <Navigate to="/login" />;
};
