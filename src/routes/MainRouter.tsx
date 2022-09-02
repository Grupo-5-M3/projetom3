import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import AboutUs from "../pages/AboutUs/AboutUs";
import ClothingCampaign from "../pages/ClothingCampaign/ClothingCampaign";
import DashBoard from "../pages/DashBoard/DashBoard";
import Home from "../pages/Home/Home";
import HomeLess from "../pages/HomeLess/HomeLess";
import Login from "../pages/Login";
import RegisterUser from "../pages/RegisterUser";
import { AnimatePresence } from "framer-motion";

export default function RouteMain() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/home" element={<Home />} />
        <Route path="/sobrenos" element={<AboutUs />} />
        <Route path="/campanhadoagasalho" element={<ClothingCampaign />} />
        <Route path="pesquisadesaparecidos" element={<HomeLess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usuario" element={<DashBoard />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </AnimatePresence>
  );
}
