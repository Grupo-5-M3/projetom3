import HeaderDiv, { DivList, DivLogo, DivMenu, DivNav, DivNavigate } from "./styles";
import Logo from "../../img/Logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import Menu from "../Menu/Index";
import { AuthContext } from "../../contexts/authContext/AuthContext";
import { Link } from "react-router-dom";
import { BiLogIn, BiLogOut } from "react-icons/bi";

export default function Header() {
  const { isLogin, isModal, setIsModal } = useContext(AuthContext);
  return (
    <HeaderDiv>
      <DivLogo>
        <img src={Logo} alt="Logotipo Da Instituição" />
      </DivLogo>
      {isModal && <Menu />}
      <DivList>
          <DivNavigate>
            <Link to="/home">Home</Link>
            <Link to="/sobrenos">Quem Somos</Link>
            <Link to="/campanhadoagasalho">Projetos</Link>
            <Link to="/pesquisadesaparecidos">Pesquisar Pessoa</Link>
          </DivNavigate>
          <DivNav>
          <Link to="/home">Apoie Agora </Link>
          {isLogin 
          ? (<Link to="/home"><BiLogOut /> logout</Link>) 
          : (<Link to="/login"><BiLogIn /> Login</Link>)
          }
          </DivNav>
      </DivList>
      <DivMenu>
        <button onClick={() => setIsModal(true)}>
          <AiOutlineMenu />
        </button>
      </DivMenu>
    </HeaderDiv>
  );
}
