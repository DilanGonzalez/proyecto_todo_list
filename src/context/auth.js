import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../sdk firebase";
import { Navigate } from "react-router-dom";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("No hay un proveedor de autenticación.");
  return context;
};
export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  const [cargando, setCargando] = useState(true);

  const registrarse = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const iniciar_sesion = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const cerrar_sesion = () => {
    signOut(auth);
  };

  useEffect(() => {
    const sesion = onAuthStateChanged(auth, (datosUsuario) => {
      setUsuario(datosUsuario);
      setCargando(false);
    });
    return () => sesion();
  }, [usuario]);

  return (
    <authContext.Provider
      value={{ registrarse, iniciar_sesion, usuario, cerrar_sesion, cargando }}
    >
      {children}
    </authContext.Provider>
  );
}
export const RutaInicial = ({ children }) => {
  const { usuario, cargando } = useAuth();
  if (!usuario) return <Navigate to="/login" />;
  if (!cargando) return <>{children}</>;
};

export const RutaValidar = ({ children }) => {
  const { usuario, cargando } = useAuth();
  if (usuario) return <Navigate to="/" />;
  if (!cargando) return <>{children}</>;
};
