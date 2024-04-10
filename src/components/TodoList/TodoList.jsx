import React from "react";
import TodoListItem from "../TodoListItem";
import styles from "./TodoList.module.css";

import { useGetTodosQuery } from "../../api/apiSlice";

const TodoList = ({ filter }) => {
  const { data, isLoading, isError } = useGetTodosQuery();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  if (isError) {
    return (
      <div className="error">
        Sorry, there was an error while getting the resource.
      </div>
    );
  }

  return (
    <ul className={styles.todoList}>
      {data
        ?.filter((todo) =>
          filter === "Active"
            ? todo.completed === false
            : filter === "Completed"
            ? todo.completed === true
            : todo
        )
        .map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
    </ul>
  );
};

export default TodoList;
