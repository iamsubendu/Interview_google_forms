import React from "react";

const SelectOne = ({ id, text, options }) => {
  return (
    <div className="selectOne" key={id}>
      <p>{text}</p>
      <select className="form-select" aria-label="Default select example">
        {options.map((value) => (
          <option key={value.id} value={value.text}>
            {value.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOne;
