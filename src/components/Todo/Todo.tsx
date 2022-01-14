import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store";
import { ITodo, TodoActions } from "../../state/todos";
import styles from "./Todo.module.css";

const Todo = ({ completed, title, id }: ITodo): React.ReactElement => {
  const dispatch: AppDispatch = useDispatch();

  const handleOnChange = () => {
    dispatch(TodoActions.toggleTodo(id));
  };

  return (
    <div className={styles.container}>
      <p>{title}</p>
      <div className={styles.controls}>
        <label style={{ cursor: 'pointer' }}><input type="checkbox" checked={completed} onChange={handleOnChange} />Toggle</label>
        <button
          onClick={() => {
            dispatch(TodoActions.deleteTodo(id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export { Todo };
