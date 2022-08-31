
import { NavLink } from 'react-router-dom'

import { BodyCart, BodyImageHomeless, BtnSupport, CartCoat, CartInstitution, CartProjects, CartSearch, ContainerHome, LegendImageHomeless, Message } from "./styles"

import imgHomeless from "../../img/homeless.png"
import Header from "../../components/Header/Header";
import imgArrow from "../../img/Arrow6.png"

export default function Home() {

  return (
    <ContainerHome>
      <Header />
      <main>
        <BodyImageHomeless>
          <img src={imgHomeless} alt="Homem com carrinho nas ruas de são paulo" />
          <LegendImageHomeless>
            <Message>
              <h1>A parte invisível do Brasil</h1>
              <p>
                Gostaria de enfatizar que a valorização de fatores subjetivos deve passar por modificações independentemente do investimento em reciclagem técnica.
              </p>
              <BtnSupport>Apoiar</BtnSupport>
            </Message>
          </LegendImageHomeless>
        </BodyImageHomeless>
        <BodyCart>

          <CartCoat>
            <div>
              <h2>Campanha do Agasalho</h2>
              <p>Clique abaixo para ajudar com doações</p>
              <NavLink to="/campanhadoagasalho"><img src={imgArrow} alt="Arrow rigth" /></NavLink>
            </div>
          </CartCoat>

          <CartInstitution>
            <div>
              <h2>É uma instituição buscando ajudar?</h2>
              <p>Clique abaixo para acessar</p>
              <NavLink to="/cadastro"><img src={imgArrow} alt="Arrow rigth" /></NavLink>
            </div>
          </CartInstitution>

          <CartProjects>
            <div>
              <h2>Nossos projetos</h2>
              <p>Clique abaixo para saber mais</p>
              <NavLink to="/sobrenos"><img src={imgArrow} alt="Arrow rigth" /></NavLink>
            </div>
          </CartProjects>

          <CartSearch>
            <div>
              <h2>Está buscando alguém?</h2>
              <p>Clique abaixo para realizar uma busca</p>
              <NavLink to="/pesquisadesaparecidos"><img src={imgArrow} alt="Arrow rigth" /></NavLink>
            </div>
          </CartSearch>

        </BodyCart>
      </main>
    </ContainerHome>
  )
}