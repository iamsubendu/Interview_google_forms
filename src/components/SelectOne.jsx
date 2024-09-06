import React from "react";

const SelectOne = ({ field, handleSelectOne }) => {
  return (
    <div className="selectOne">
      <select className="form-select" aria-label="Default select example">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};

export default SelectOne;
