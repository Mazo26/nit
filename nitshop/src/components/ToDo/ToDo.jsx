import React, { useState } from "react";
import "./ToDo.css";
import CustomDiv from "../CustomDiv/CustomDiv";

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === "") return;

    setTodos([...todos, input]);
    setInput("");
  };

  const handleDelete = (index) => {
    let filteredArr = todos.filter((todo, i) => i !== index);
    setTodos(filteredArr);
  };

  return (
    <div className='app'>
      <h1>To-Do App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter a task'
        />
        <button type='submit'>Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
