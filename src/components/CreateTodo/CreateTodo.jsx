import styles from "./CreateTodo.module.css";

import React, { useState } from "react";
import { useCreateTodoMutation } from "../../api/apiSlice";

const CreateTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [createTodo, { isError }] = useCreateTodoMutation();

  if (isError) {
    alert("Sorry, there was an error while creating a todo.");
  }

  return (
    <div className={styles.createTodoContainer}>
      <input
        type="text"
        placeholder="Add todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={() =>
          newTodo != ""
            ? createTodo(newTodo)
            : alert("Please, provide a value.")
        }
      >
        Add
      </button>
    </div>
  );
};

export default CreateTodo;
