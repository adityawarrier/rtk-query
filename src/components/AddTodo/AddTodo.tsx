import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoActions } from "../../state/todos";
import styles from "./AddTodo.module.css";

export const AddTodo = (): React.ReactElement => {
  const [title, setTitle] = useState("");
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label>
        <input
          type="radio"
          checked={checked}
          onChange={() => {
            setChecked((old) => !old);
          }}
        />
        Done
      </label>
      <button
        disabled={!title}
        onClick={() => {
          dispatch(
            TodoActions.addTodo({
              completed: checked,
              title,
            })
          );
        }}
      >
        Add
      </button>
    </div>
  );
};
