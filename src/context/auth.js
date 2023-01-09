import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../sdk firebase";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("No hay un proveedor de autenticación.");
  return context;
};
export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

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
    });
    return () => sesion();
  }, [usuario]);

  return (
    <authContext.Provider
      value={{ registrarse, iniciar_sesion, usuario, cerrar_sesion }}
    >
      {children}
    </authContext.Provider>
  );
}
