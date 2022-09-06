import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoutes() {  
  return (
    localStorage.getItem('@TOKEN') ? <Outlet/> : <Navigate to='/login' />
  )
}