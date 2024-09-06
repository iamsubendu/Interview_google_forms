import React from "react";

const AddTextField = ({ text }) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputName" className="form-label">
        {text}
      </label>
      <input
        name="name"
        type="name"
        className="form-control"
        id="exampleInputName"
        aria-describedby="nameHelp"
      />
    </div>
  );
};

export default AddTextField;
