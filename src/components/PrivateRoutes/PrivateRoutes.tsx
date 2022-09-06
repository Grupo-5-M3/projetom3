import { Outlet, Navigate } from "react-router-dom";
// import { AuthContext } from "../../contexts/authContext/AuthContext";

// interface IAuthProps {
//   children: ReactNode
// };

export default function PrivateRoutes() {
  // let auth = useContext(AuthContext);
  // const navigate = useNavigate();
  
  return (
    localStorage.getItem('@TOKEN') ? <Outlet/> : <Navigate to='/login' />
  )
}