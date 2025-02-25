import { useTodosState } from "../store/store";
import { Todo } from "../types/todo-types";
import "../../index.css";

export const TodoItem = ({ data }: { data: Todo }) => {
  const removeTodo = useTodosState((state) => state.removeTodo);

  return (
    <li className="todo-item">
      {data.text}
      <span onClick={() => removeTodo(data.id)}>delete</span>
    </li>
  );
};
