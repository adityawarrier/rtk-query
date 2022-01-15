import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RTKType } from "../../constants/types";
import { useAddTodoMutation, useGetTodosQuery } from "../../queries/Todos";
import { TodoActions } from "../../state/todos";
import styles from "./AddTodo.module.css";

export const AddTodo = ({
  rtkType,
}: {
  rtkType: RTKType;
}): React.ReactElement => {
  const [title, setTitle] = useState("");
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const [addTodo] = useAddTodoMutation();
  const { data: todos } = useGetTodosQuery();

  const onAddRedux = () => {
    dispatch(
      TodoActions.addTodo({
        completed: checked,
        title,
      })
    );
  };

  const onAddQuery = () => {
    let length = 0;
    todos?.forEach((t) => {
      if (t.id > length) {
        length = t.id;
      }
    });

    addTodo({
      title,
      completed: checked,
      id: length + 1,
    });
  };

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
        onClick={rtkType === RTKType.REDUX ? onAddRedux : onAddQuery}
      >
        Add
      </button>
    </div>
  );
};
