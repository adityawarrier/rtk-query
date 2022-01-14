import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { ITodo } from "../state/todos";
import { Todo } from "./Todo/Todo";

const TodoList = (): React.ReactElement => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </>
  );
};

export { TodoList };
