import React from "react";

const MultipleSelect = ({ field, handleMultipleSelect }) => {
  return (
    <div className="multipleSelect">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Checked checkbox
        </label>
      </div>
    </div>
  );
};

export default MultipleSelect;
