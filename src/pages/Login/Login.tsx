import Header from "../../components/Header/Header";
import { DivBack } from "./styles";
import ModalRegister from "../../components/ModalRegister/ModalRegister";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext/AuthContext";

export default function Login() {
  const { isLogin, setIsLogin, isRegister, setIsRegister } =
    useContext(AuthContext);

  return (
    <>
      <Header />
      {!isLogin ? (
        !isRegister ? (
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
                  Ainda não tem cadastro?{" "}
                  <button type="button" onClick={() => setIsRegister(true)}>
                    cadastre-se
                  </button>
                </p>
              </div>
            </form>
          </DivBack>
        ) : (
          <ModalRegister />
        )
      ) : (
        <div>Registro</div>
      )}
    </>
  );
}
