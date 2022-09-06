import HeaderDiv, {
  DivList,
  DivLogo,
  DivMenu,
  DivNav,
  DivNavigate,
} from "./styles";
import Logo from "../../img/Logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import Menu from "../Menu/Index";
import { AuthContext } from "../../contexts/authContext/AuthContext";
import { Link } from "react-router-dom";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import ResetPage from "../AboutTeam/ResetPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Header() {
  const { isLogin, isModal, setIsModal, logout } = useContext(AuthContext);
  return (
    <HeaderDiv>
      <DivLogo>
        <Link to="/home">
          <img src={Logo} alt="Logotipo Da Instituição" />
        </Link>
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
          {isLogin ? (
            <>
              <Link to="/usuario">
                <CgProfile />
                Perfil
              </Link>
              <Link to="/home" onClick={logout}>
                <BiLogOut />
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <BiLogIn />
                Login
              </Link>
            </>
          )}
        </DivNav>
      </DivList>
      <DivMenu>
        <button onClick={() => setIsModal(true)}>
          <AiOutlineMenu />
        </button>
      </DivMenu>
      <ToastContainer autoClose={1500} />
      <ResetPage />
    </HeaderDiv>
  );
}
