import Header from "../../components/Header/Header";
import { DivBack } from "./styles";

export default function RegisterUser() {
  return (
    <>
      <Header />
      <DivBack>
        <form>
          <h3>Login</h3>
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
          />

          <label>Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
          />

          <button type="submit" className="register">
            Logar
          </button>
          <div>
            <p>
              Ainda não tem cadastro? <button type="button">cadastre-se</button>
            </p>
          </div>
        </form>
      </DivBack>
    </>
  );
}
