import React from "react";
import styles from "./TodoListItem.module.css";

import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../../api/apiSlice";

const TodoListItem = ({ todo }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const handleTodoChange = (value) => {
    updateTodo({ ...todo, completed: value });
  };

  return (
    <li className={styles.todoListItem}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => handleTodoChange(e.target.checked)}
      />
      <p>{todo.todo}</p>
      <button onClick={() => deleteTodo(todo.id)}>x</button>
    </li>
  );
};

export default TodoListItem;
