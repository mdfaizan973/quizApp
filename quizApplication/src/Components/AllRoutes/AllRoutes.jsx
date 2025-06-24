import React from "react";
import { createQuizUrl, homeUrl, loginUrl, registrationUrl } from "./RoutesUrl";
import LandingPage from "../../Pages/HomePage/LandingPage";
import Login from "../../Pages/LoginPage/Login";
import { Route, Routes } from "react-router-dom";
import RegistrationForm from "../../Pages/LoginPage/RegistrationForm";
import CreateQuiz from "../../Pages/CreateQuizes/CreateQuiz";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path={homeUrl} element={<LandingPage />} />
        <Route path={loginUrl} element={<Login />} />
        <Route path={registrationUrl} element={<RegistrationForm />} />
        <Route path={createQuizUrl} element={<CreateQuiz />} />
      </Routes>
    </>
  );
}
