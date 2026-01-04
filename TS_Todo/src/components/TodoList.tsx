import type { TodoInterface } from "../types/todo.type";
import Todo from "./Todo";

type TodosProp = {
  todos: TodoInterface[],
  toggleComplete:(id:number)=>void,
  deleteTodo:(id:number)=>void,
};
function TodoList({ todos, toggleComplete, deleteTodo }: TodosProp) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
