import { useContext } from "react";
import Header from "../../components/Header/Header";
import { AuthContext } from "../../contexts/authContext/AuthContext";
import { ContainerHome } from "../Home/styles";

export default function HomeLess() {

  const { homeLess } = useContext(AuthContext)

  // console.log(homeLess)

  return (

    <ContainerHome>
      <Header />
      <main>

        <header>

          <div>
            <input type="text" />
            <button>Pesquisa</button>
          </div>

          <div>
            <div>
              <button>esquerda</button>
              <button>direita</button>
              <button>perfil</button>
            </div>
          </div>

        </header>

        <ul>
          {
            homeLess.map(user =>
              <li>
                <img src={user.img} alt="" />
                <p>Nome: {user.name}</p>
                <p>CPF: {user.CPF}</p>
                <p>Idade: {user.age}</p>
                <p>Estado: {user.state}</p>
                <p>Último local: {user.lastLocation}</p>
                <p>Contato: {user.contact}</p>
              </li>
            )
          }
        </ul>

      </main>
    </ContainerHome>
  )

}
