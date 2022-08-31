import { Route, Routes, Navigate } from "react-router-dom";

import AboutUs from "../pages/AboutUs/AboutUs";
import ClothingCampaign from "../pages/ClothingCampaign/ClothingCampaign";
import DashBoard from "../pages/DashBoard/DashBoard";
import Home from "../pages/Home/Home";
import HomeLess from "../pages/HomeLess/HomeLess";
import RegisterUser from "../pages/RegisterUser";

export default function RouteMain() {

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/sobrenos" element={<AboutUs />} />
      <Route path="/campanhadoagasalho" element={<ClothingCampaign />} />
      <Route path="/pesquisadesaparecidos" element={<HomeLess />} />
      <Route path="/login" element={<RegisterUser />} />
      <Route path="/usuario" element={<DashBoard />} />
      <Route path="*" element={<Navigate replace to='/home' />} />
    </Routes>
  )
}
