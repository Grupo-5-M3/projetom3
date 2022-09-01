import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext/AuthContext";

import { ContainerHome } from "../Home/styles";
import { BodyHomeLess, BodyMissing, CardHomeLess, DirectionsBottom, DirectionsTop, HeaderSearchHomeLess, Main, Search } from "./styles";
import Header from "../../components/Header/Header";

import imgSearch from "../../img/search.png"
import imgComeBack from "../../img/ComeBack.png"
import imgProceed from "../../img/Proceed.png"
import imgTeste from "../../img/people01.jpg"

export default function HomeLess() {

  const { homeLess, setSearchFor, searchFor, setFiltro } = useContext(AuthContext)

  function wanted() {
    let newArray = homeLess.filter(ele => ele.name === searchFor)
    return newArray
  }

  return (

    <ContainerHome>
      <Header />
      <Main>

        <BodyHomeLess>

          <HeaderSearchHomeLess>

            <Search>
              <input
                type="text"
                placeholder="Digite sua pesquisa aqui"
                onChange={event => setSearchFor(event.target.value)}
              />
              <button onClick={() => setFiltro(wanted())}>
                <img src={imgSearch} alt="Lupa de busca" />
              </button>
            </Search>

            <DirectionsTop>
              <button><img src={imgComeBack} alt="Voltar lista de usuarios" /></button>
              <button><img src={imgProceed} alt="Adicnatar lista de usuarios" /></button>
            </DirectionsTop>

          </HeaderSearchHomeLess>

          <BodyMissing>
            {
              homeLess.map(user =>
                <CardHomeLess>
                  <figure>
                    <img src={imgTeste} alt="Foto do usuario" />
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

          <DirectionsBottom>
            <button><img src={imgComeBack} alt="Voltar lista de usuarios" /></button>
            <button><img src={imgProceed} alt="Adicnatar lista de usuarios" /></button>
          </DirectionsBottom>
        </BodyHomeLess>
      </Main>
    </ContainerHome >
  )

}
