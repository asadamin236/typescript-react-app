import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';

const NewTodos = () => {
  // Separate person state
  const [person, setPerson] = useState({
    name: "Asad",
    Designation: "Electrical Engineer"
  });

  // Todos state
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { text: "Todo 1", id: 1 },
      { text: "Todo 2", id: 2 },
      { text: "Todo 3", id: 3 },
      { text: "Todo 4", id: 4 },
    ];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Define a function to add a new todo
  const addNewTodo = () => {
    setTodos(prevTodos => {
      const updatedTodos = [{ text: "new Todo", id: Date.now() }, ...prevTodos];
      console.log("Todos after adding:", updatedTodos);
      return updatedTodos;
    });
  };

  // Function to delete a todo by id
  const deleteItem = (id: number) => {
    setTodos(prevTodos => {
      const updatedTodos = prevTodos.filter((todoItem) => todoItem.id !== id);
      console.log("Todos after deletion:", updatedTodos);
      return updatedTodos;
    });
  };

  return (
    <ul>
      <li>
        <h1>{person.name}</h1>
        <h2>{person.Designation}</h2>
        <Button onClick={() => setPerson({ name: "Asad", Designation: "Software Engineer" })}>
          Update
        </Button>
      </li>
      <li>
        <button onClick={addNewTodo}>Please Add New Todo</button>
      </li>
      {todos.map((todoItem) => (
        <li key={todoItem.id}>
          {todoItem.text}
          <button onClick={() => deleteItem(todoItem.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default NewTodos;