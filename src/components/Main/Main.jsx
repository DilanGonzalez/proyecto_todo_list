import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider, RutaInicial, RutaValidar } from "../../context/auth";
import Error from "../Error/Error";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";

const Main = () => {
  return (
    <>
      <AuthProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<RutaInicial><Home /></RutaInicial>} />
            <Route path="/login" element={<RutaValidar><Login /></RutaValidar>} />
            <Route path="/register" element={<RutaValidar><Register /></RutaValidar>} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </AuthProvider>
    </>
  );
};

export default Main;
