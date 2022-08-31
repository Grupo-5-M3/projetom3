import Header from "../../components/Header/Header";
import { DivBackground, Main } from "./styles";

export default function AboutUs() {
  return (
    <>
      <Header />
      <DivBackground>
        <Main>
          <div>
            <h1> Quem somos </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              delectus nobis nihil odit corrupti soluta obcaecati nam vel dolor
              ducimus. Laboriosam doloremque ea rem quisquam molestiae nisi.
              Voluptate, et. Pariatur?
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              delectus nobis nihil odit corrupti soluta obcaecati nam vel dolor
              ducimus. Laboriosam doloremque ea rem quisquam molestiae nisi.
              Voluptate, et. Pariatur?
            </p>
          </div>
          <div>
            <h2> O que Fazemos </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              delectus nobis nihil odit corrupti soluta obcaecati nam vel dolor
              ducimus. Laboriosam doloremque ea rem quisquam molestiae nisi.
              Voluptate, et. Pariatur?
            </p>
          </div>
        </Main>
        <footer>
        </footer>
      </DivBackground>
    </>
  );
}
