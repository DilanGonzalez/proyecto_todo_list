import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../context/auth";
import { auth } from "../../sdk firebase";
import Error from "../Error/Error";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";

const Main = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  

  return (
    <>
      <AuthProvider>
        <Header authUser={authUser} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </AuthProvider>
    </>
  );
};

export default Main;
