import React from "react";
import { Header, SignIn, Register, Home } from ".";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  const COHORT_NAME = "2303-ftb-et-web-ft";
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};
export default Main;
