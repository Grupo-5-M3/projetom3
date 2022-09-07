import { DivBack } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext/AuthContext";
import api from "../../server/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IRegisterPerson {
  name: string;
  cnpj: string;
  adress: string;
  phone: number;
  email: string;
  password: string;
}

export default function ModalRegister() {
  const { setIsRegister } = useContext(AuthContext);
  const customId = "custom-id-yes";

  const formSchema = yup.object().shape({
    name: yup.string(),
    cnpj: yup
      .string()
      .matches(
        /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
        "Formato inválido de cnpj"
      ),
    adress: yup.string(),
    phone: yup.string(),
    email: yup.string().email().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterPerson>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (data: IRegisterPerson) => {
    console.log(data);
    try {
      const response = await api.post("register", {
        name: data.name,
        cnpj: data.cnpj,
        adress: data.adress,
        phone: data.phone,
        email: data.email,
        password: data.password,
      });
      const { user } = response.data;

      console.log(response);
      console.log(user);

      response.status === 201 &&
        toast.success("Registro realizado com sucesso", {
          toastId: customId,
        });
      setTimeout(() => setIsRegister(false), 2500);

      // navigate("dashboard", { replace: true });
    } catch (error: any) {
      toast.error(`Error: ${error.response.data}`);
      console.log(error.response.data);
    }
  };

  return (
    <DivBack>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h3>Cadastre-se</h3>
        <label>Nome da instituição</label>
        <input type="text" placeholder="Digite o nome" {...register("name")} />

        <label>CNPJ</label>
        <input
          type="text"
          placeholder="Digite o CNPJ Ex: 00.000.000/0000-00"
          {...register("cnpj")}
        />
        {errors.cnpj?.message}
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
      <ToastContainer autoClose={1500} />
    </DivBack>
  );
}
