import { DivBack } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext/AuthContext";
import api from "../../server/api";

export default function ModalRegister() {
  const { setIsRegister } = useContext(AuthContext);

  const onSubmitFunction = async (data: any) => {
    console.log(data);
    try {
      const response = await api.post("register", {
        name: data.name,
        cpf: data.cpf,
        adress: data.adress,
        phone: data.phone,
        email: data.email,
        password: data.password,
      });
      const { user } = response.data;

      console.log(response);
      console.log(user);

      response.status === 201 && setIsRegister(false);

      // navigate("dashboard", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <DivBack>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h3>Cadastre-se</h3>
        <label>Nome</label>
        <input type="text" placeholder="Digite o nome" {...register("name")} />

        <label>CPF</label>
        <input type="text" placeholder="Digite o CPF" {...register("cpf")} />

        <label>Endereço</label>
        <input
          type="text"
          placeholder="Informe o seu endereço"
          {...register("adress")}
        />

        <label>Telefone</label>
        <input
          type="phone"
          placeholder="Digite o seu telefone"
          {...register("phone")}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Digite o email"
          {...register("email")}
        />

        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite a senha"
          {...register("password")}
        />

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
