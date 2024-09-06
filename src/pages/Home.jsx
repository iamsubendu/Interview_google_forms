import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/create-form");
  };
  return (
    <div className="home">
      <button className="btn btn-info" onClick={handleButton}>
        Generate form
      </button>
    </div>
  );
};

export default Home;
