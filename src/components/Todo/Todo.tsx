import React from "react";
import { ITodo } from "../../state/todos";
import styles from "./Todo.module.css";

const Todo = ({
  completed,
  title,
  onDelete,
  onToggle,
}: ITodo & {
  onDelete: () => void;
  onToggle: () => void;
}): React.ReactElement => {
  return (
    <div className={styles.container}>
      <p>{title}</p>
      <div className={styles.controls}>
        <label style={{ cursor: "pointer" }}>
          <input type="checkbox" checked={completed} onChange={onToggle} />
          Toggle
        </label>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export { Todo };
