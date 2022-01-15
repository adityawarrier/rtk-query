import { useState } from "react";
import { Provider } from "react-redux";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { TodoListQuery } from "./components/TodoListQuery";
import { RTKType, TodoTypes } from "./constants/types";
import { store } from "./state/store";

export const App = (): React.ReactElement => {
  const [type, setType] = useState(TodoTypes.ALL);
  const [rtkType, setRtkType] = useState(RTKType.REDUX);

  return (
    <Provider store={store}>
      <Header
        type={type}
        setType={setType}
        rtkType={rtkType}
        setRtkType={setRtkType}
      />
      <AddTodo rtkType={rtkType} />
      {rtkType === RTKType.REDUX ? (
        <TodoList type={type} />
      ) : (
        <TodoListQuery type={type} />
      )}
    </Provider>
  );
};
