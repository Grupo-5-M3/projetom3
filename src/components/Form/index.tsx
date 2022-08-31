import { Container } from "./style";

export default function Form() {
  return (
    <Container>
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
          <label htmlFor="">Onde foi resgistrado</label>
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
    </Container>
  )
}