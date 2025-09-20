import React, { useState } from 'react'
import TodoItem from './TodoItem';

const Todos = () => {
  const [todos, setTodos] = useState([
    { text: "Todo 1", id: 1 },
    { text: "Todo 2", id: 2 },
    { text: "Todo 3", id: 3 },
    { text: "Todo 4", id: 4 },
    { text: "Todo 5", id: 5 },
    { text: "Todo 6", id: 6 },
    { text: "Todo 7", id: 7 },
    { text: "Todo 8", id: 8 }
  ]);

  const AddNewTodo = () => {
    setTodos((todos) => {
      return [
        ...todos,
        {
          text: "New Todo",
          id: Date.now(),
        },

      ]
    })
  }
  // Uncomment and fix deleteItem
  const deleteItem = (id: number) => {
    setTodos(todos.filter((todoItem) => todoItem.id !== id));
  };

  return (
    <ul>
      <li>
        <button onClick={AddNewTodo}>Please Add New Todo</button>
      </li>
      {todos.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          item={todoItem}
          onDelete={deleteItem}
        />
      ))}
    </ul>
  );
};

export default Todos;