import { createSelector } from "@reduxjs/toolkit";
import { TodoTypes } from "../../constants/types";
import { RootState } from "../store";

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

export const TodoSelectos = {
  getTodosByType,
};
