import "./App.css";

import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";
import Filter from "./components/Filter";

import { useState } from "react";
import { TODOFILTEROPTIONS } from "./constants.js";

function App() {
  const [filter, setFilter] = useState("All");

  return (
    <>
      <div className="todoToolbar">
        <CreateTodo />
        <Filter
          filter={filter}
          setFilter={setFilter}
          filterOptions={TODOFILTEROPTIONS}
        />
      </div>
      <TodoList filter={filter} />
    </>
  );
}

export default App;
