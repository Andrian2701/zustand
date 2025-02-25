import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Todo } from "../types/todo-types";

interface TodosState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  removeAllTodos: () => void;
}

export const useTodosState = create<TodosState>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (todo: Todo) =>
        set((state) => ({ todos: [...state.todos, todo] })),
      removeTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      removeAllTodos: () => set(() => ({ todos: [] })),
    }),
    {
      name: "todos",
    }
  )
);
