import { Route, Routes, Navigate } from "react-router-dom";

import AboutUs from "../pages/AboutUs/AboutUs";
import ClothingCampaign from "../pages/ClothingCampaign/ClothingCampaign";
import DashBoard from "../pages/DashBoard/DashBoard";
import HomeLess from "../pages/HomeLess/HomeLess";

export default function RouteMain() {

  return (
    <Routes>
      <Route path="/DashBoard" element={<DashBoard />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/ClothingCampaign" element={<ClothingCampaign />} />
      <Route path="/HomeLess" element={<HomeLess />} />
      <Route path="*" element={<Navigate replace to='/DashBoard' />} />
    </Routes>
  )
}
