import React from "react";

const AddTextField = ({ id, text }) => {
  return (
    <div className="addTextField" key={id}>
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
