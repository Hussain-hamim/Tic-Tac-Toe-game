import React, { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
  const [titles, setTitles] = useState("");

  return (
    <div>
      <input
        placeholder="add todo..."
        type="text"
        value={titles}
        onChange={(e) => {
          setTitles(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTitles("");
          onAddTodo(titles);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
