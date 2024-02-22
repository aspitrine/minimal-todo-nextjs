"use client";

import type {Todo} from '@prisma/client'
import {checkTodo, removeTodo} from "@/actions/todo";
type TodoListProps = {
  todos: Todo[];
}
function TodoList({
  todos
} : TodoListProps) {
  return <ul className="list-none">
    {todos.map(todo => (
      <li key={todo.id}>
        <input type="checkbox" checked={todo.done} onChange={() => checkTodo(todo)}/>
        {todo.label}
        <button onClick={() => removeTodo(todo)}>Supprimer</button>
      </li>
    ))}
  </ul>
}

export default TodoList;
