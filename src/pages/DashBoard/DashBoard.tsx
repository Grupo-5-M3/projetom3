import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Header from "../../components/Header/Header";
import { Container } from "./style";
import api from '../../server/api';
import Footer from "../../components/Footer/Footer";
import AnimatedPage from "../../components/AnimatedPage";
import ResetPage from "../../components/AboutTeam/ResetPage";
import { toast } from 'react-toastify';
interface IRegisterPerson {
  name: string;
  age: number;
  description: string;
  location: string;
  date: string;
  volunteer: string;
  image?: string;
  contact: string;
  userId: number;
};

export default function DashBoard() {
  const userId = Number(localStorage.getItem('@userId'));

  const schema = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    age: yup.string().required('Campo obrigatório'),
    description: yup.string().required('Campo obrigatório').max(70),
    location: yup.string().required('Campo obrigatório'),
    date: yup.string().required('Campo obrigatório'),
    volunteer: yup.string().required('Campo obrigatório'),
    image: yup.string(),
    contact: yup.string().email().required('Campo obrigatório')
  });

  const {register, handleSubmit, formState: { errors }} = useForm<IRegisterPerson>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: IRegisterPerson) => {
    data.userId = userId;

    api.post('/database', data)
      .then((res) => {
        if (res.status === 201) {
          toast.success('Cadastro realizado')
        };
      })
      .catch((err) => {
        console.error(err);
        toast.error(`Ocorreu um erro. Tente novamente.`);
      })
  };

  return (
    <>
      <Header/>
      <AnimatedPage>
        <Container>
          <section className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur sit laudantium numquam corporis laborum culpa ducimus
              omnis deleniti provident cum assumenda veritatis nihil delectus
              maiores, facere minima aut dolor dolore.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
              recusandae harum et quos veniam voluptatum odio at, fugit illum
              ipsa vitae nihil id minus consectetur voluptatem commodi similique
              quod maiores!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              sapiente quod. Consectetur, ab animi. Rem error, dicta ipsa iusto
              alias in soluta odio illum? Commodi porro doloribus aut sequi vel!
            </p>
          </section>
          <div className="form-container">
            <div className="form-header">
              <h1>Registre uma nova pessoa</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-container">
                <label htmlFor="">Nome</label>
                <input
                  type="text"
                  placeholder="Digite o nome"
                  {...register("name")}
                />
                <p className="error-message">{errors.name?.message}</p>
              </div>
              <div className="input-container">
                <label htmlFor="">Idade</label>
                <input
                  type="text"
                  placeholder="Digite a idade"
                  {...register("age")}
                />
                <p className="error-message">{errors.age?.message}</p>
              </div>
              <div className="input-container">
                <label htmlFor="">Descrição física</label>
                <input
                  type="text"
                  placeholder="Descreva a aparência"
                  {...register("description")}
                />
                <p className="error-message">{errors.description?.message}</p>
              </div>
              <div className="input-container">
                <label htmlFor="">Instituição de registro</label>
                <input
                  type="text"
                  placeholder="Identifique o local de registro"
                  {...register("location")}
                />
                <p className="error-message">{errors.location?.message}</p>
              </div>
              <div className="input-container">
                <label htmlFor="">Data de registro</label>
                <input
                  type="date"
                  {...register("date")}
                />
                <p className="error-message">{errors.date?.message}</p>
              </div>

              <div className="input-container">
                <label htmlFor="">Voluntário</label>
                <input
                  type="text"
                  placeholder="Nome do voluntário registrando"
                  {...register("volunteer")}
                />
                <p className="error-message">{errors.volunteer?.message}</p>
              </div>
              <div className="input-container">
                <label htmlFor="">Imagem</label>
                <input
                  type="text"
                  placeholder="Link para a imagem"
                  {...register("image")}
                />
              </div>
              <div className="input-container">
                <label htmlFor="">Contato da instituição</label>
                <input
                  type="email"
                  placeholder="Email da instituição"
                  {...register("contact")}
                />
                <p className="error-message">{errors.contact?.message}</p>
              </div>

              <button>Cadastrar</button>
            </form>
          </div>
        </Container>
        <Footer color={"#354A59"} />
        <ResetPage />
      </AnimatedPage>
    </>
  )
}