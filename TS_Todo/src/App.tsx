import React, { useState } from "react";
import type { TodoInterface } from "./types/todo.type";
import TodoList from "./components/TodoList";

export default function App() {
  const [Todos, setTodos] = useState<TodoInterface[]>([]);
  const [newTodoText, setNewTodoText] = useState<string>("");

  const addNewTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodoText.trim() === "") return;

    const newTodo: TodoInterface = {
      id: Date.now(),
      text: newTodoText,
      completed: false,
    };

    setTodos((previous) => [...previous, newTodo]);
    setNewTodoText("");
  };

  const toggleComplete = (id: number): void => {
    setTodos(
      Todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos(Todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <form className="todo-form">
        <input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          type="text"
          placeholder="Input here."
        />
        <button onClick={addNewTodo}>add</button>
      </form>

      <TodoList
        todos={Todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
