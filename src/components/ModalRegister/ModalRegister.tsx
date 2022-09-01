import { DivBack } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext/AuthContext";

export default function ModalRegister() {
  const { setIsRegister } = useContext(AuthContext);
  return (
    <DivBack>
      <form>
        <h3>Cadastre-se</h3>
        <label>Nome</label>
        <input type="text" placeholder="Digite o nome" />

        <label>CPF</label>
        <input type="text" placeholder="Digite o CPF" />

        <label>Endereço</label>
        <input type="text" placeholder="Informe o seu endereço" />

        <label>Telefone</label>
        <input type="phone" placeholder="Digite o seu telefonr" />

        <label>Email</label>
        <input type="email" placeholder="Digite o email" />

        <label>Senha</label>
        <input type="password" placeholder="Digite a senha" />

        <button type="submit" className="register">
          Cadastrar
        </button>
        <div>
          <p>
            Já tem cadastro?{" "}
            <button type="button" onClick={() => setIsRegister(false)}>
              Fazer login
            </button>
          </p>
        </div>
      </form>
    </DivBack>
  );
}
