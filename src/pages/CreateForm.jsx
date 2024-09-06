import React, { useEffect, useState } from "react";
import SelectOne from "../components/SelectOne";
import AddTextField from "../components/AddTextField";
import MultipleSelect from "../components/MultipleSelect";

const CreateForm = () => {
  const [fields, setFields] = useState([]);
  const [newFieldType, setNewFieldType] = useState("text");
  const [newFieldTypeData, setNewFieldTypeData] = useState([]);
  const [textData, setTextData] = useState("");

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
    }
    console.log(newFieldTypeData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fields", fields);
  };

  useEffect(() => {}, [fields]);

  return (
    <div className="d-flex gap-3">
      <div className="container-fluid createForm">
        <div className="mt-3">
          <label htmlFor="formSelect">
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
          <button
            type="submit"
            className="btn btn-primary mt-3"
            onClick={addField}
          >
            Add
          </button>
        </div>
      </div>
      <div className="line"></div>
      <div className="container-fluid displayForm">
        <form action="POST" className="m-5" onSubmit={handleSubmit}>
          {newFieldTypeData.map((data1) => (
            <div key={data1.id}>
              {data1.type === "text" && <AddTextField text={data1.text} />}
              {data1.type === "singleSelect" && <SelectOne id={data1.id} />}
              {data1.type === "multiSelect" && <MultipleSelect id={data1.id} />}
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
