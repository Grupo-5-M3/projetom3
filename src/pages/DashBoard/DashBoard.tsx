import Header from "../../components/Header/Header";
import { Container } from "./style";

export default function DashBoard() {
  // interface IRegisterHomeless {

  // };

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

          <form>
            <div className="input-container">
              <label htmlFor="">Nome</label>
              <input type="text" placeholder="Digite o nome"/>
            </div>
            <div className="input-container">
              <label htmlFor="">Idade</label>
              <input type="text" placeholder="Digite a idade"/>
            </div>
            <div className="input-container">
              <label htmlFor="">Descrição física</label>
              <input type="text" placeholder="Descreva a aparência"/>
            </div>
            <div className="input-container">
              <label htmlFor="">Onde foi registrado</label>
              <input type="text" placeholder="Identifique o local de registro"/>
            </div>
            <div className="input-container">
              <label htmlFor="">Voluntário</label>
              <input type="text" placeholder="Nome do voluntário registrando"/>
            </div>
            <div className="input-container">
              <label htmlFor="">Imagem</label>
              <input type="file"/>
            </div>

            <button>Cadastrar</button>        
          </form>
        </div>
      </Container>
    </>
  )
};