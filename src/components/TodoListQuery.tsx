import React, { useEffect } from "react";
import { ITodo } from "../state/todos";
import { Todo } from "./Todo/Todo";
import {
  useDeleteTodoMutation,
  useGetTodosQuery,
  useToggleTodoMutation,
} from "../queries/Todos";
import { TodoTypes } from "../constants/types";

const TodoListQuery = ({ type }: { type: TodoTypes }): React.ReactElement => {
  const {
    data: todos,
    isLoading,
    isError,
    refetch,
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
  const [toggleTodo] = useToggleTodoMutation(undefined);
  const [deleteTodo] = useDeleteTodoMutation(undefined);

  useEffect(() => {
    // refetch();
  }, [type, refetch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <>
      {todos?.map(({ id, title, completed }: ITodo) => {
        const onDelete = async () => {
          try {
            await deleteTodo(id);
          } catch (e: any) {
            console.error(e);
          }
        };
        const onToggle = () => {
          toggleTodo({
            id,
            completed: !completed,
          });
        };
        return (
          <Todo
            completed={completed}
            key={id}
            id={id}
            title={title}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        );
      })}
    </>
  );
};

export { TodoListQuery };
