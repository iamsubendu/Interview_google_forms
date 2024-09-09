import React from "react";

const MultipleSelect = ({ id, text, options }) => {
  return (
    <div className="multipleSelect" key={id}>
      <p>{text}</p>
      <div className="form-check d-flex gap-5 flex-wrap">
        {options.map((value) => (
          <div key={value.id}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              {value.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleSelect;
