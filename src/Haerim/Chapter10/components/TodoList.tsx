import React, { useCallback } from "react";
import "./TodoList.scss";
import TodoListItem from "./TodoListItem";

const TodoList = ({
  todos,
  onRemove,
  onToggle,
}: {
  todos: { id: number; text: string; checked: boolean }[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
