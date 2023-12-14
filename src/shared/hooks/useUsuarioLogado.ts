import { useContext } from "react";
import { UsuarioLogadoContext } from "../context";

export const useUsuarioLogado = () => {
  const context = useContext(UsuarioLogadoContext);
  return context;
};
