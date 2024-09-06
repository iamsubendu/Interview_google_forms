import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateForm from "./pages/CreateForm";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-form" element={<CreateForm />} />
      </Routes>
    </>
  );
};

export default App;
