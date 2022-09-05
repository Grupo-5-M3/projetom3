import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext/AuthContext";

import { ContainerHome } from "../Home/styles";
import {
  BodyHomeLess,
  BodyMissing,
  CardHomeLess,
  DirectionsBottom,
  DirectionsTop,
  HeaderSearchHomeLess,
  Main,
  Search,
} from "./styles";
import Header from "../../components/Header/Header";

import imgSearch from "../../img/search.png";
import imgComeBack from "../../img/ComeBack.png";
import imgProceed from "../../img/Proceed.png";
import imgTeste from "../../img/people01.jpg";
import api from "../../server/api";
import Footer from "../../components/Footer/Footer";
import ResetPage from "../../components/AboutTeam/ResetPage";
import AnimatedPage from "../../components/AnimatedPage";

export default function HomeLess() {

  const {
    homeLess,
    isNextDisabled,
    isGoBackDisabled,
    teste,
    setSearchFor,
    next,
    goBack,
  } = useContext(AuthContext);

  console.log(homeLess);
  return (
    <ContainerHome>
      <Header />
      <AnimatedPage>
        <Main>
          <BodyHomeLess>
            <HeaderSearchHomeLess>
              <Search>
                <input
                  type="text"
                  placeholder="Digite sua pesquisa aqui"
                  onChange={(event) => setSearchFor(event.target.value)}
                />
                <button onClick={() => teste()}>
                  <img src={imgSearch} alt="Lupa de busca" />
                </button>
              </Search>

              <DirectionsTop>
                <button disabled={isGoBackDisabled} onClick={() => goBack()}>
                  <img src={imgComeBack} alt="Voltar lista de usuarios" />
                </button>

                <button disabled={isNextDisabled} onClick={() => next()}>
                  <img src={imgProceed} alt="Adiantar lista de usuarios" />
                </button>
              </DirectionsTop>
            </HeaderSearchHomeLess>

          <BodyMissing>
            {homeLess.map((user, index) => (
              <CardHomeLess key={index}>
                <figure>
                  <img src={imgTeste} alt="Foto do usuario" />
                  <figcaption>
                    <ul>
                      <li>
                        {" "}
                        <span> Nome: </span> {user.name}
                      </li>
                      <li>
                        {" "}
                        <span> CPF: </span> {user.CPF}
                      </li>
                      <li>
                        {" "}
                        <span> Idade: </span> {user.age}
                      </li>
                      <li>
                        {" "}
                        <span> Estado: </span> {user.state}
                      </li>
                      <li>
                        {" "}
                        <span> Último local: </span> {user.lastLocation}
                      </li>
                      <li>
                        {" "}
                        <span> Contato: </span> {user.contact}
                      </li>
                    </ul>
                  </figcaption>
                </figure>
              </CardHomeLess>
            ))}
          </BodyMissing>

          <DirectionsBottom>
            <button
              disabled={isGoBackDisabled}
              onClick={() => goBack()}>
              <img src={imgComeBack} alt="Voltar lista de usuarios" />
            </button>

              <button disabled={isNextDisabled} onClick={() => next()}>
                <img src={imgProceed} alt="Adiantar lista de usuarios" />
              </button>
            </DirectionsBottom>
          </BodyHomeLess>
        </Main>
        <Footer color={"#435664"} />
        <ResetPage />
      </AnimatedPage>
    </ContainerHome>
  );
}
