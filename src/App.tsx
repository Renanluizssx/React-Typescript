import { Routes } from "./routes";
import { UsuarioLogadoProvider } from "./shared/context";

export const App = () => {
  return (
    <div className="App">
      <UsuarioLogadoProvider>
        <Routes />
      </UsuarioLogadoProvider>
    </div>
  );
};
