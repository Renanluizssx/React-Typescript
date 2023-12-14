import { useUsuarioLogado } from "../../../shared/hooks";

interface IButtonLoginProps {
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  children: React.ReactNode;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({
  onClick,
  type,
  children,
}) => {
  const usuarioLogadoContext = useUsuarioLogado();
  return (
    <button type={type} onClick={onClick}>
      {usuarioLogadoContext.nomeDoUsuario} {children}
    </button>
  );
};
