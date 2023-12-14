import { Link } from "react-router-dom";
import { useRef } from "react";
import { useUsuarioLogado } from "../../shared/hooks";
export const Dashboard = () => {
  const counterRef = useRef(0);

  const { nomeDoUsuario } = useUsuarioLogado();
  return (
    <div>
      <p>Dashboard</p>
      <p>{nomeDoUsuario}</p>
      <p>Contador: {counterRef.current}</p>

      <button onClick={() => counterRef.current++}>Somar</button>
      <button onClick={() => console.log(counterRef.current)}>Logar</button>
      <Link to="/entrar">Login</Link>
    </div>
  );
};
