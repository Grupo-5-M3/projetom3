import { NavLink, useNavigate } from "react-router-dom";

import {
  BodyCart,
  BodyImageHomeless,
  BtnSupport,
  CartCoat,
  CartInstitution,
  CartProjects,
  CartSearch,
  ContainerHome,
  LegendImageHomeless,
  Message,
} from "./styles";

import imgHomeless from "../../img/homeless.png";
import Header from "../../components/Header/Header";
import imgArrow from "../../img/Arrow6.png";
import AnimatedPage from "../../components/AnimatedPage";
import Footer from "../../components/Footer/Footer";
import ResetPage from "../../components/AboutTeam/ResetPage";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext/AuthContext";

export default function Home() {
  const {isLogin} = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <ContainerHome id="top">
      <Header />
      <AnimatedPage>
      <main>
        <BodyImageHomeless>
          <img
            src={imgHomeless}
            alt="Homem com carrinho nas ruas de são paulo"
          />
          <LegendImageHomeless>
            <Message>
              <h1>Quando a rua se torna abrigo...</h1>
              <p>
                Moradores de rua sofrem preconceito constante e são auto
                denominados marginais ou bandidos, muitas vezes não sendo.
                Muitos possuem família com filhos, e por falta de oportunidades
                sofrem nas ruas. Moradores de rua são invisíveis aos olhos das
                pessoas.
              </p>
              <BtnSupport onClick={()=> isLogin? navigate('/usuario') : navigate('/login')}>Apoiar</BtnSupport>
            </Message>
          </LegendImageHomeless>
        </BodyImageHomeless>
        <BodyCart>
          <CartCoat onClick={()=>navigate('/campanhadoagasalho')}>
            <NavLink to="/campanhadoagasalho" replace>
              <div>
                <h2>Campanha do Agasalho</h2>
                <p>Clique abaixo para ajudar com doações</p>
                <img src={imgArrow} alt="Arrow rigth" />
              </div>
            </NavLink>
          </CartCoat>

          <CartInstitution onClick={()=> isLogin? navigate('/usuario') : navigate('/login')}>
            <NavLink to="/login">
              <div>
                <h2>É uma instituição buscando ajudar?</h2>
                <p>Clique abaixo para acessar</p>
                <img src={imgArrow} alt="Arrow rigth" />
              </div>
            </NavLink>
          </CartInstitution>

          <CartProjects onClick={()=>navigate('/sobrenos')}>
            <NavLink to="/sobrenos">
              <div>
                <h2>Sobre Nós</h2>
                <p>Clique abaixo para saber mais</p>
                <img src={imgArrow} alt="Arrow rigth" />
              </div>
            </NavLink>
          </CartProjects>

          <CartSearch onClick={()=>navigate('/pesquisadesaparecidos')}>
            <NavLink to="/pesquisadesaparecidos">
              <div>
                <h2>Está buscando alguém?</h2>
                <p>Clique abaixo para realizar uma busca</p>
                <img src={imgArrow} alt="Arrow rigth" />
              </div>
            </NavLink>
          </CartSearch>
        </BodyCart>
      </main>
      <Footer color={'rgba(165, 0, 226, 1)'}/>
      <ResetPage/>
      </AnimatedPage>
    </ContainerHome>
  );
}
