import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoTypes } from "../constants/types";
import { AppDispatch, RootState } from "../state/store";
import { ITodo, TodoActions } from "../state/todos";
import { TodoSelectos } from "../state/todos/selectors";
import { Todo } from "./Todo/Todo";

const TodoList = ({ type }: { type: TodoTypes }): React.ReactElement => {
  const dispatch: AppDispatch = useDispatch();
  const todos = useSelector((state: RootState) =>
    TodoSelectos.getTodosByType(state, type)
  );

  return (
    <>
      {todos.map(({ id, title, completed }: ITodo) => {
        const onDelete = () => {
          dispatch(TodoActions.deleteTodo(id));
        };
        const onToggle = () => {
          dispatch(TodoActions.toggleTodo(id));
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

export { TodoList };
