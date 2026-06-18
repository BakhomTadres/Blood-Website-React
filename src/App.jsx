import { useState } from "react";
import Register from "./Register.jsx";
import HomePage from "./HomePage.jsx";
import About from "./About.jsx";
import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./Login.jsx";
import Details from "./Details.jsx";
import Add from "./Add.jsx";
import Donors from "./Donors.jsx";
import { useUser } from "./UserContext.jsx";

function App() {
  const { user, loading } = useUser();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={
            loading && localStorage.getItem("token") ? null : user ? (
              <HomePage />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/register"
          element={
            loading && localStorage.getItem("token") ? null : user ? (
              <HomePage />
            ) : (
              <Register />
            )
          }
        />
        <Route path="/add" element={<Add />} />
        <Route path="/details" element={<Details />} />
        <Route path="/donors" element={<Donors />} />
      </Routes>
    </>
  );
}

export default App;
