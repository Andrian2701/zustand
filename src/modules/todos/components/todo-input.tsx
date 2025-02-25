import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTodosState } from "../store/store";
import "../../index.css";

export const TodoInput = () => {
  const [value, setValue] = useState("");

  const addTodo = useTodosState((state) => state.addTodo);
  const removeAllTodos = useTodosState((state) => state.removeAllTodos);
  const todos = useTodosState((state) => state.todos);

  return (
    <div className="todo-input">
      <input
        placeholder="Todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        disabled={value === ""}
        onClick={() => {
          addTodo({
            id: uuidv4(),
            text: value,
          });
          setValue("");
        }}
      >
        Add new todo!
      </button>
      <button disabled={todos.length <= 0} onClick={removeAllTodos}>
        Delete all
      </button>
    </div>
  );
};
