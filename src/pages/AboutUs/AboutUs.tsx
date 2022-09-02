import { Link } from "react-router-dom";
import AboutTeam from "../../components/AboutTeam";
import AnimatedPage from "../../components/AnimatedPage";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { DivBackground, Main } from "./styles";

export default function AboutUs() {
  return (
    <>
      <Header />
      <AnimatedPage>
        <DivBackground>
          <Main>
            <div>
              <h1> Quem somos </h1>
              <p>
                O Social Dev Institute é um projeto social criado durante o
                Módulo final de frontend do curso de desenvolvedor fullstack da
                Kenzie Academy Brasil. Projeto feito em grupo formado por 5
                integrantes.{" "}
                <a href="#team">
                  Clique aqui para saber mais sobre os integrantes
                </a>
              </p>

              <h2> O que Fazemos </h2>
              <p>
                Nossa idéia de projeto foi criada visando resolver um problema
                público muito sério, a situação dos moradores de rua no Brasil.
              </p>
              <p>
                Os números de censo recente mostram um crescimento exponencial
                da população que vive nas ruas. Porém é importante ressaltar um
                ponto: é bastante difícil quantificar o número de pessoas nessa
                situação do Brasil, pois a maioria dos censos leva em conta o
                local de moradia das pessoas e as que estão em condição de rua
                não têm essa constância, o que atrapalha a realização de
                pesquisas, contabilizações e afins. Isso significa que os
                números reais podem ser ainda maiores.
              </p>
              <p>
                Por isso o objetivo desse projeto é dar visibilidade a essas
                pessoas, gerando oportunidades de emprego, moradia, e reconexão
                com a família e a sociedade.
              </p>
              <p id="italic">
                Para se conectar com essas pessoas se faz necessário estar
                presente em lugares onde elas visitam.
              </p>
              <p>
                O objetivo do nosso projeto é cadastrar esses moradores no
                sistema e deixar sua história disponível aqueles que querem
                ajudá-los.
              </p>
              <p>
                Muitos deles tem habilidades e experiências em diversas áreas
                profissionais, tem estudo ou desejariam voltar a estudar, se
                desconectaram de suas famílias por diversos motivos e são
                taxados até mesmo como desaparecidos.
              </p>
              <p>
                No nosso sistema também será possível o cadastro de voluntários,
                empresas e ongs que desejam ajudar essas pessoas podendo ver
                esses perfis(moradores) e ter um acesso mais facilitado a eles
                por saber a região onde essa pessoa “mora” seja em:
              </p>
              <ul>
                <li>Abrigos Comunitários</li>
                <li>Restaurantes do Governo</li>
                <li>Postos de trabalho</li>
                <li>Assistências sociais</li>
                <li>etc...</li>
              </ul>
              <p>
                Com isso queremos estreitar os laços entre essas pessoas e
                aqueles que querem ajudá-los seja com doações, ajuda física e
                psicológica ou oportunidades de emprego ou moradia.
              </p>
              <p>
                Também queremos a medida que o nosso banco de dados for
                crescendo que seja possível a busca por pessoas que estão
                “desaparecidas” e reconectá-los com seus parentes. Visto que por
                não terem moradia fixa e nem meios de comunicação acaba sendo
                quase impossível encontrar quem está nessa situação. Além disso
                queremos que nosso sistema contenha algumas
                informações(noticias, pesquisas e dados) sobre esse problema
                social, e o link de organizações de ajuda.{" "}
              </p>
                <AboutTeam/>
            </div>
          </Main>
        </DivBackground>
        <Footer color={"#1B187A"} />
      </AnimatedPage>
    </>
  );
}
