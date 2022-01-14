import React from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TodoTypes } from "../App";
import { RootState } from "../state/store";
import { ITodo } from "../state/todos";
import { Todo } from "./Todo/Todo";

const getTodosByType = createSelector(
  [(state: RootState) => state.todos.todos, (_, type: TodoTypes) => type],
  (todos, type) =>
    todos.filter((t) => {
      switch (type) {
        default:
        case TodoTypes.ALL:
          return true;
        case TodoTypes.DONE:
          return t.completed;
        case TodoTypes.PENDING:
          return !t.completed;
      }
    })
);

const TodoList = ({ type }: { type: TodoTypes }): React.ReactElement => {
  const todos = useSelector((state: RootState) => getTodosByType(state, type));

  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </>
  );
};

export { TodoList };
