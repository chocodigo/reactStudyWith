import { useCallback, useReducer, useRef, useState } from "react";
import { TodoInsert, TodoList, TodoTemplate } from "./components";
import "./components/TodoTemplate.scss";

type TodoType = {
  id: number;
  text: string;
  checked: boolean;
};

type Action =
  | { type: "INSERT"; todo: TodoType }
  | { type: "REMOVE"; id: number }
  | { type: "TOGGLE"; id: number };

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos: TodoType[], action: Action) {
  switch (action.type) {
    case "INSERT":
      return todos.concat(action.todo);
    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

export const Chapter10 = () => {
  // const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const nextId = useRef(4);

  const onInsert = useCallback((text: string) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // setTodos((todos) => todos.concat(todo));
    dispatch({ type: "INSERT", todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id: number) => {
    // setTodos((todos) => todos.filter((todo) => todo.id !== id));
    dispatch({ type: "REMOVE", id });
  }, []);

  const onToggle = useCallback((id: number) => {
    // setTodos((todos) =>
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo
    //   )
    // );
    dispatch({ type: "TOGGLE", id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};
