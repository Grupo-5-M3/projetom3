import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Header from "../../components/Header/Header";
import { Container } from "./style";
import Footer from '../../components/Footer/Footer';

interface IRegisterPerson {
  name: string;
  age: number;
  description: string;
  location: string;
  volunteer: string;
  image: string;
};

export default function DashBoard() {
  const schema = yup.object().shape({

  });

  const {register, handleSubmit, formState: { errors }} = useForm<IRegisterPerson>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: IRegisterPerson) => {
    console.log(data)
  };

  return (
    <>
    <Header/>
      <Container>
        <section className="text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sit laudantium numquam corporis laborum culpa ducimus omnis deleniti provident cum assumenda veritatis nihil delectus maiores, facere minima aut dolor dolore.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem recusandae harum et quos veniam voluptatum odio at, fugit illum ipsa vitae nihil id minus consectetur voluptatem commodi similique quod maiores!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sapiente quod. Consectetur, ab animi. Rem error, dicta ipsa iusto alias in soluta odio illum? Commodi porro doloribus aut sequi vel!</p>
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
                {...register('name')}  
              />
            </div>
            <div className="input-container">
              <label htmlFor="">Idade</label>
              <input 
                type="text" 
                placeholder="Digite a idade"
                {...register('age')} 
              />
            </div>
            <div className="input-container">
              <label htmlFor="">Descrição física</label>
              <input 
                type="text" 
                placeholder="Descreva a aparência"
                {...register('description')} 
              />
            </div>
            <div className="input-container">
              <label htmlFor="">Onde foi registrado</label>
              <input 
                type="text" 
                placeholder="Identifique o local de registro"
                {...register('location')} 
              />
            </div>
            <div className="input-container">
              <label htmlFor="">Voluntário</label>
              <input 
                type="text" 
                placeholder="Nome do voluntário registrando"
                {...register('volunteer')} 
              />
            </div>
            <div className="input-container">
              <label htmlFor="">Imagem</label>
              <input 
                type="text"
                placeholder='Link para a imagem'
                {...register('image')} 
              />
            </div>

            <button>Cadastrar</button>        
          </form>
        </div>
      </Container>
      <Footer color={'#354A59'}/>
    </>
  )
};
