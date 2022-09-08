import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ToastContainer } from "react-toastify";
import { IRegisterPerson } from "../../pages/DashBoard/DashBoard";
import { DivBackEdit } from "../../pages/Login/styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext/AuthContext";
import { AiOutlineClose } from "react-icons/ai"

function ModalEditHomeless() {

  const { setIsEdit, editHomeless } = useContext(AuthContext)

  const { register, handleSubmit } = useForm<IRegisterPerson>({});

  return (
    <DivBackEdit>

      <form onSubmit={handleSubmit(editHomeless)}>

        <h3>Editar <button onClick={() => setIsEdit(false)}>{<AiOutlineClose />}</button></h3>

        <div className="input-container">
          <label htmlFor="">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Nome a ser alterado"
            {...register("name")}
          />
        </div>

        <div className="input-container">
          <label htmlFor="">Idade</label>
          <input
            type="number"
            id="age"
            placeholder="Idade a ser alterada"
            {...register("age")}
          />
        </div>

        <div className="input-container">
          <label htmlFor="">Descrição</label>
          <input
            type="text"
            id="description"
            placeholder="Idade a ser alterada"
            {...register("description")}
          />
        </div>

        <div className="input-container">
          <label htmlFor="">Local</label>
          <input
            type="text"
            id="location"
            placeholder="Localização a ser alterada"
            {...register("location")}
          />
        </div>

        <div className="input-container">
          <label htmlFor="">Data</label>
          <input
            type="date"
            id="date"
            placeholder="Data a ser alterada"
            {...register("date")}
          />
        </div>

        <div className="input-container">
          <label htmlFor="">Voluntário</label>
          <input
            type="text"
            id="volunteer"
            placeholder="Voluntário a ser alterada"
            {...register("volunteer")}
          />
        </div>

        <button type="submit" className="register">
          Editar
        </button>
      </form>
      <ToastContainer />
    </DivBackEdit>

  )
}

export default ModalEditHomeless