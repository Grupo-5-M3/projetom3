import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext/AuthContext";

import { ContainerHome } from "../Home/styles";
import { BodyHomeLess, BodyMissing, CardHomeLess, Directions, HeaderSearchHomeLess, Search } from "./styles";
import Header from "../../components/Header/Header";

import imgSearch from "../../img/search.png"
import imgComeBack from "../../img/ComeBack.png"
import imgProceed from "../../img/Proceed.png"

export default function HomeLess() {

  const { homeLess } = useContext(AuthContext)

  return (

    <ContainerHome>
      <Header />
      <main>

        <BodyHomeLess>

          <HeaderSearchHomeLess>

            <Search>
              <input type="text" placeholder="Digite sua pesquisa aqui" />
              <button><img src={imgSearch} alt="Lupa de busca" /></button>
            </Search>

            <Directions>
              <button><img src={imgComeBack} alt="Voltar lista de usuarios" /></button>
              <button><img src={imgProceed} alt="Adicnatar lista de usuarios" /></button>
            </Directions>

          </HeaderSearchHomeLess>

          <BodyMissing>
            {
              homeLess.map(user =>
                <CardHomeLess>
                  <figure>
                    <img src={user.img} alt="" />
                    <figcaption>
                      <p> <span> Nome: </span> {user.name}</p>
                      <p> <span> CPF: </span> {user.CPF}</p>
                      <p> <span> Idade: </span> {user.age}</p>
                      <p> <span> Estado: </span> {user.state}</p>
                      <p> <span> Último local: </span> {user.lastLocation}</p>
                      <p> <span> Contato: </span> {user.contact}</p>
                    </figcaption>
                  </figure>
                </CardHomeLess>
              )
            }
          </BodyMissing>

        </BodyHomeLess>
      </main>
    </ContainerHome >
  )

}
