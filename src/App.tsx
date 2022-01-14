import { useState } from "react";
import { Provider } from "react-redux";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { TodoList } from "./components/TodoList";
import { store } from "./state/store";

export enum TodoTypes {
  ALL = "ALL",
  DONE = "DONE",
  PENDING = "PENDING",
}

export const App = (): React.ReactElement => {
  const [type, setType] = useState(TodoTypes.ALL);

  return (
    <Provider store={store}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <h1>Todo List</h1>
        <label>
          <input
            type="radio"
            checked={type === TodoTypes.DONE}
            onChange={() => {
              setType(TodoTypes.DONE);
            }}
          />
          Finished
        </label>
        <label>
          <input
            type="radio"
            checked={type === TodoTypes.PENDING}
            onChange={() => {
              setType(TodoTypes.PENDING);
            }}
          />
          Pending
        </label>
        <label>
          <input
            type="radio"
            checked={type === TodoTypes.ALL}
            onChange={() => {
              setType(TodoTypes.ALL);
            }}
          />
          All
        </label>
      </div>
      <TodoList type={type} />
      <AddTodo />
    </Provider>
  );
};
