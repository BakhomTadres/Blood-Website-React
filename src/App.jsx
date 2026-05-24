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

function App() {
  const [count, setCount] = useState(0);
  let [donors, setDonors] = useState(
    JSON.parse(localStorage.getItem("donors")) || [],
  );
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/add"
          element={<Add donors={donors} setDonors={setDonors} />}
        />
        <Route path="/details" element={<Details />} />
        <Route path="/donors" element={<Donors donors={donors} />} />
      </Routes>
    </>
  );
}

export default App;
