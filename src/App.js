import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      const newTodo = {
        id: Math.random(),
        todo: input,
        checked: false,
      };

      setList([...list, newTodo]);
      setInput("");
    }
  };

  const handleToggleTodo = (index) => {
    const updatedList = list.map((todo, i) =>
      i === index ? { ...todo, checked: !todo.checked } : todo
    );

    setList(updatedList);
  };

  const handleDeleteTodo = (id) => {
    const updatedList = list.filter((todo) => todo.id !== id);

    setList(updatedList);
  };

  return (
    <div>
      <h1>Todo list</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {list.map((todo, index) => (
          <li key={index} style={{ display: "flex" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggleTodo(index)}
              />
              {todo.todo}
              <button style={{marginTop: "5px", marginBottom: "5px"}} onClick={() => handleDeleteTodo(todo.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
