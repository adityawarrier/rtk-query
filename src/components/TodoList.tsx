import React from "react";
import { useSelector } from "react-redux";
import { TodoTypes } from "../constants/types";
import { RootState } from "../state/store";
import { ITodo } from "../state/todos";
import { TodoSelectos } from "../state/todos/selectors";
import { Todo } from "./Todo/Todo";

const TodoList = ({ type }: { type: TodoTypes }): React.ReactElement => {
  const todos = useSelector((state: RootState) =>
    TodoSelectos.getTodosByType(state, type)
  );

  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </>
  );
};

export { TodoList };
