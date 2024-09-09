import React, { useState } from "react";
import SelectOne from "../components/SelectOne";
import AddTextField from "../components/AddTextField";
import MultipleSelect from "../components/MultipleSelect";

const CreateForm = () => {
  const [fields, setFields] = useState([]);
  const [newFieldType, setNewFieldType] = useState("text");
  const [newFieldTypeData, setNewFieldTypeData] = useState([]);
  const [textData, setTextData] = useState("Default text");
  const [singleSelectOption, setSingleSelectOption] = useState([
    {
      id: 1,
      text: "Default text",
    },
  ]);
  const [multipleSelectOption, setMultipleSelectOption] = useState([
    {
      id: 1,
      text: "Default text",
    },
  ]);

  const setValueOfOneOption = (id, value) => {
    setSingleSelectOption((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, text: value } : option
      )
    );
  };

  const setValueOfMultipleOption = (id, value) => {
    setMultipleSelectOption((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, text: value } : option
      )
    );
  };

  const addMoreSingleSelectOptions = () => {
    setSingleSelectOption((prevFields) => [
      ...prevFields,
      {
        id: prevFields.length + 1,
        text: "Default text",
      },
    ]);
  };

  const addMoreMultipleSelectOptions = () => {
    setMultipleSelectOption((prevFields) => [
      ...prevFields,
      {
        id: prevFields.length + 1,
        text: "Default text",
      },
    ]);
  };

  const addField = () => {
    setFields((prevFields) => [
      ...prevFields,
      {
        id: prevFields.length + 1,
        type: newFieldType,
      },
    ]);
    if (newFieldType === "text") {
      setNewFieldTypeData((prevFields) => [
        ...prevFields,
        {
          id: prevFields.length + 1,
          type: newFieldType,
          text: textData,
        },
      ]);
    } else if (newFieldType === "singleSelect") {
      setNewFieldTypeData((prevFields) => [
        ...prevFields,
        {
          id: prevFields.length + 1,
          type: newFieldType,
          text: textData,
          options: [...singleSelectOption],
        },
      ]);
    } else {
      setNewFieldTypeData((prevFields) => [
        ...prevFields,
        {
          id: prevFields.length + 1,
          type: newFieldType,
          text: textData,
          options: [...multipleSelectOption],
        },
      ]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fields", fields);
  };

  return (
    <div className="d-flex gap-3 adminForm">
      <div className="container-fluid createForm">
        <div className="mt-3">
          <label htmlFor="formSelect" className="mb-3">
            Open this menu to add your choice to the form
          </label>
          <select
            id="formSelect"
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setNewFieldType(e.target.value)}
          >
            <option value="text">Text</option>
            <option value="singleSelect">Single Select</option>
            <option value="multiSelect">Multiple Select</option>
          </select>
          {newFieldType === "text" && (
            <div className="my-3">
              Add your text: <br />
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                aria-describedby="nameHelp"
                onChange={(e) => setTextData(e.target.value)}
                value={textData}
              />
            </div>
          )}
          {newFieldType === "singleSelect" && (
            <div className="my-3">
              <p>Add your fields for single select: </p>
              <input
                type="text"
                className="form-control mb-2"
                id="exampleInputName"
                aria-describedby="nameHelp"
                onChange={(e) => setTextData(e.target.value)}
                value={textData}
              />
              <p className="mt-5">Add your options</p>
              {singleSelectOption &&
                singleSelectOption.map((data) => (
                  <input
                    key={data.id}
                    type="text"
                    className="form-control mb-2"
                    id={`singleSelect_${data.id}`}
                    onChange={(e) =>
                      setValueOfOneOption(data.id, e.target.value)
                    }
                    value={data.text}
                  />
                ))}
              <button
                className="btn btn-info mt-3"
                onClick={addMoreSingleSelectOptions}
              >
                Add more inputs for single select
              </button>
            </div>
          )}
          {newFieldType === "multiSelect" && (
            <div className="my-3">
              <p>Add your fields for multiple select: </p>
              <input
                type="text"
                className="form-control mb-2"
                id="exampleInputName"
                aria-describedby="nameHelp"
                onChange={(e) => setTextData(e.target.value)}
                value={textData}
              />
              <p className="mt-5">Add your options</p>
              {multipleSelectOption &&
                multipleSelectOption.map((data) => (
                  <input
                    key={data.id}
                    type="text"
                    className="form-control mb-2"
                    id={`multipleSelect_${data.id}`}
                    onChange={(e) =>
                      setValueOfMultipleOption(data.id, e.target.value)
                    }
                    value={data.text}
                  />
                ))}
              <button
                className="btn btn-info mt-3"
                onClick={addMoreMultipleSelectOptions}
              >
                Add more inputs for single select
              </button>
            </div>
          )}
          <button
            type="submit"
            className="btn btn-danger mt-3"
            onClick={addField}
          >
            Add to your form
          </button>
        </div>
      </div>
      <div className="line"></div>
      <div className="container-fluid displayForm">
        <form
          action="POST"
          className="m-5 d-flex flex-column gap-3"
          onSubmit={handleSubmit}
        >
          {newFieldTypeData.map((data) => (
            <div key={data.id}>
              {data.type === "text" && (
                <AddTextField id={data.id} text={data.text} />
              )}
              {data.type === "singleSelect" && (
                <SelectOne
                  id={data.id}
                  text={data.text}
                  options={data.options}
                />
              )}
              {data.type === "multiSelect" && (
                <MultipleSelect
                  id={data.id}
                  text={data.text}
                  options={data.options}
                />
              )}
            </div>
          ))}
          {newFieldTypeData && newFieldTypeData.length > 0 && (
            <button
              type="submit"
              className="btn btn-primary mt-3"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
