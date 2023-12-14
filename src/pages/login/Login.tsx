import { useState, useMemo, useCallback, useRef } from "react";
import { InputLogin } from "./components/inputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { useUsuarioLogado } from "../../shared/hooks";

export const Login = () => {
  const inputPassowrdRef = useRef<HTMLInputElement>(null);
  const { nomeDoUsuario } = useUsuarioLogado();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const emailLength = useMemo(() => {
    return email.length * 1000;
  }, [email.length]);

  const handleEntrar = useCallback(() => {
    {
      console.log(email);
      console.log(password);
    }
  }, [email, password]);

  return (
    <div>
      <form>
        <p>Quantidade de caracteres no email: {emailLength}</p>
        <p>{nomeDoUsuario}</p>
        <InputLogin
          label="Email"
          value={email}
          onChange={(newValue) => setEmail(newValue)}
          onPressEnter={() => inputPassowrdRef.current?.focus()}
        />
        <InputLogin
          label="Senha"
          type="password"
          value={password}
          onChange={(newValue) => setPassword(newValue)}
          ref={inputPassowrdRef}
        />
        {/* <button type="button" onClick={handleEntrar}>
          Entrar
        </button> */}

        <ButtonLogin type="button" onClick={handleEntrar}>
          Entrar
        </ButtonLogin>
      </form>
    </div>
  );
};
