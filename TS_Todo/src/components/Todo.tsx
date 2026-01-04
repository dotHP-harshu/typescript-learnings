import type {TodoInterface} from "../types/todo.type"

type TodoProp = {
    todo:TodoInterface,
    toggleComplete:(id:number)=>void,
    deleteTodo:(id:number)=>void
}

function Todo({todo, toggleComplete, deleteTodo}:TodoProp) {
  return (
    <div className="todo">
        <input type="checkbox" checked={todo.completed} onChange={()=>toggleComplete(todo.id)} />
        <p>{todo.text}</p>
        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
    </div>
  )
}

export default Todo