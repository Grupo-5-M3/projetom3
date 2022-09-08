import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext/AuthContext";
import { CardUser, ButtonSalvar, ButtonEditar, ButtonCancelar } from "./style";
import { useForm } from "react-hook-form";
import api from "../../server/api";
import { toast } from "react-toastify";

interface IRegisterPerson {
  name: string;
  cnpj: string;
  adress: string;
  phone: number;
  email: string;
  password: string;
}

export default function CardUsuario() {
  const { user, setIsLogin } = useContext(AuthContext);
  const [save, setSave] = useState(false);

  const { register, handleSubmit } = useForm<IRegisterPerson>();

  const onSubmitForm = (data: IRegisterPerson) => {
    api
      .patch(`https://projetom3grupo5.herokuapp.com/users/${user.id}`, data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Usuário atualizado com sucesso!", {
            autoClose: 1500,
          });

          setTimeout(() => {
            setIsLogin(true);
            setSave(false);
          }, 2000);
        } else {
          toast.error("Ops, algo deu errado", { autoClose: 1500 });
        }
      });
  };

  return (
    <CardUser>
      <div>
        <h3>Meus dados</h3>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          {save ? (
            <ButtonEditar onClick={() => setSave(true)} disabled>
              Editar
            </ButtonEditar>
          ) : (
            <ButtonEditar onClick={() => setSave(true)}>Editar</ButtonEditar>
          )}
          Nome Instituição:{" "}
          <input
            type="text"
            placeholder={user.name === "" ? "Não informado" : user.name}
            readOnly={!save && true}
            {...register("name")}
          />
          CNPJ:{" "}
          <input
            type="text"
            placeholder={user.cnpj === "" ? "Não informado" : user.cnpj}
            readOnly={!save && true}
            {...register("cnpj")}
          />
          Endereço:{" "}
          <input
            type="text"
            placeholder={user.adress === "" ? "Não informado" : user.adress}
            readOnly={!save && true}
            {...register("adress")}
          />
          Telefone:{" "}
          <input
            type="text"
            placeholder={user.phone === "" ? "Não informado" : user.phone}
            readOnly={!save && true}
            {...register("phone")}
          />
          Email:{" "}
          <input
            type="text"
            placeholder={user.email === "" ? "Não informado" : user.email}
            readOnly={!save && true}
            {...register("email")}
          />
          {save && (
            <div>
              <ButtonSalvar type="submit" className="save">
                Salvar
              </ButtonSalvar>

              <ButtonCancelar onClick={() => setSave(false)}>
                Cancelar
              </ButtonCancelar>
            </div>
          )}
        </form>
      </div>
    </CardUser>
  );
}
