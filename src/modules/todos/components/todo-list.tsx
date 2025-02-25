import { TodoItem } from "./todo-item";
import { useTodosState } from "../store/store";
import "../../index.css";

export const TodoList = () => {
  const todos = useTodosState((state) => state.todos);

  return (
    <>
      {todos.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem key={todo.id} data={todo} />
          ))}
        </ul>
      ) : null}
    </>
  );
};
