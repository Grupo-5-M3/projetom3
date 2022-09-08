import { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { GrEdit, GrNext, GrPrevious } from "react-icons/gr";
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
import { Link } from "react-router-dom";
import ModalEditHomeless from "../../components/ModalEditHomeless";
import { BiTrash } from "react-icons/bi";

export default function HomeLess() {
  const {
    homeLess,
    isNextDisabled,
    isGoBackDisabled,
    isEdit,


    search,
    setSearchFor,
    next,
    goBack,
    deleteHomeless,
    setEdit,
    setIsEdit

  } = useContext(AuthContext);

  return (
    <ContainerHome>
      {
        isEdit
          ?
          <ModalEditHomeless />
          :
          <></>
      }
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

                <button onClick={() => search()}>
                  <BsSearch />
                </button>
              </Search>

              <DirectionsTop>
                <button disabled={isGoBackDisabled} onClick={() => goBack()}>
                  {/* <img src={imgComeBack} alt="Voltar lista de usuarios" /> */}
                  <GrPrevious />
                </button>

                <button disabled={isNextDisabled} onClick={() => next()}>
                  {/* <img src={imgProceed} alt="Adiantar lista de usuarios" /> */}
                  <GrNext />
                </button>
              </DirectionsTop>
            </HeaderSearchHomeLess>
            <BodyMissing>
              {homeLess.map((user) => (
                <CardHomeLess key={user.id}>
                  <Link to="#">
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
                            <span> Idade: </span> {user.age}
                          </li>
                          <li>
                            {" "}
                            <span> Descrição física: </span> {user.description}
                          </li>
                          <li>
                            {" "}
                            <span> Local de registro: </span> {user.location}
                          </li>
                          <li>
                            {" "}
                            <span> Voluntário: </span> {user.volunteer}
                          </li>
                          <li>
                            {" "}
                            <span> Contato: </span> {user.user.phone}
                          </li>
                          <li>
                            {" "}
                            <span> Data: </span> {user.date}
                          </li>
                          <div>
                            <button onClick={() => {
                              setEdit(user)
                              setIsEdit(true)
                            }}>{<GrEdit />}</button>
                            <button onClick={() => deleteHomeless(user)}>{<BiTrash />}</button>
                          </div>
                        </ul>
                      </figcaption>
                    </figure>
                  </Link>
                </CardHomeLess>
              ))}
            </BodyMissing>

            <DirectionsBottom>
              <button disabled={isGoBackDisabled} onClick={() => goBack()}>
                {/* <img src={imgComeBack} alt="Voltar lista de usuarios" /> */}
                <GrPrevious />
              </button>

              <button disabled={isNextDisabled} onClick={() => next()}>
                {/* <img src={imgProceed} alt="Adiantar lista de usuarios" /> */}
                <GrNext />
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
