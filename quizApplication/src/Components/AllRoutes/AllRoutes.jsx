import React from "react";
import { home, loginPage } from "./RoutesUrl";
import LandingPage from "../../Pages/HomePage/LandingPage";
import Login from "../../Pages/LoginPage/Login";
import { Route, Routes } from "react-router-dom";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path={home} element={<LandingPage />} />
        <Route path={loginPage} element={<Login />} />
      </Routes>
    </>
  );
}
