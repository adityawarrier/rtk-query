import React from "react";
import { ITodo } from "../state/todos";
import { Todo } from "./Todo/Todo";
import { useGetTodosQuery } from "../queries/Todos";
import { TodoTypes } from "../constants/types";

const TodoListQuery = ({ type }: { type: TodoTypes }): React.ReactElement => {
  const {
    data: todos,
    isLoading,
    isError,
  } = useGetTodosQuery(undefined, {
    selectFromResult: ({ data, ...rest }) => ({
      data: data?.filter((t) => {
        switch (type) {
          default:
          case TodoTypes.ALL:
            return true;
          case TodoTypes.DONE:
            return t.completed;
          case TodoTypes.PENDING:
            return !t.completed;
        }
      }),
      ...rest,
    }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <>
      {todos?.map((todo: ITodo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </>
  );
};

export { TodoListQuery };
