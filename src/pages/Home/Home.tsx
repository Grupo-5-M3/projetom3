

import imgHomeless from "../../img/homeless.svg"
import { BodyImageHomeless, BtnSupport, ContainerHome, LegendImageHomeless, Message } from "../DashBoard/styles"


export default function Home() {

  return (
    <ContainerHome>
      <header>

      </header>
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
        <ul>

        </ul>
      </main>
    </ContainerHome>
  )
}