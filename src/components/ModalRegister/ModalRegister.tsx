import { DivBack } from "./styles";

export default function ModalRegister() {
  return (
    <div>
      <DivBack>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio
          saepe, repellendus perferendis nam unde pariatur aspernatur nihil
          molestiae expedita quo animi obcaecati, non beatae officia rem quod
          autem iure!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio
          saepe, repellendus perferendis nam unde pariatur aspernatur nihil
          molestiae expedita quo animi obcaecati, non beatae officia rem quod
          autem iure!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio
          saepe, repellendus perferendis nam unde pariatur aspernatur nihil
          molestiae expedita quo animi obcaecati, non beatae officia rem quod
          autem iure!
        </p>

        <form>
          <h3>Cadastre-se</h3>
          <label>Nome</label>
          <input type="text" placeholder="Digite o nome" />

          <label>CPF</label>
          <input type="text" placeholder="Digite o CPF" />

          <label>Endereço</label>
          <input type="text" placeholder="Informe o seu endereço" />

          <label>Área de atuação</label>
          <input type="text" placeholder="Digite a área de atuação" />

          <label>Nome de atuação</label>
          <input type="text" placeholder="Digite o nome de atuação" />

          <label>Nome da Instituição</label>
          <input type="text" placeholder="Digite o nome da sua Instituição" />

          <label>Instituição / Voluntário </label>
          <input type="text" placeholder="Digite o tipo de ajuda" />

          <button type="submit">Cadastrar</button>
        </form>
      </DivBack>
    </div>
  );
}
