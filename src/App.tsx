import { useState } from "react";
import { Provider } from "react-redux";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { FindTodo } from "./components/FindTodo";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { TodoListQuery } from "./components/TodoListQuery";
import { RTKType, TodoTypes } from "./constants/types";
import { store } from "./state/store";

export const App = (): React.ReactElement => {
  const [type, setType] = useState(TodoTypes.ALL);
  const [rtkType, setRtkType] = useState(RTKType.REDUX);

  const renderNavs = () => {
    switch (rtkType) {
      default:
      case RTKType.REDUX:
        return (
          <>
            <AddTodo rtkType={RTKType.REDUX} />
            <TodoList type={type} />
          </>
        );
      case RTKType.QUERY:
        return (
          <>
            <AddTodo rtkType={RTKType.QUERY} />
            <TodoListQuery type={type} />
          </>
        );
      case RTKType.SEARCH:
        return <FindTodo />;
    }
  };

  return (
    <Provider store={store}>
      <Header
        type={type}
        setType={setType}
        rtkType={rtkType}
        setRtkType={setRtkType}
      />
      {renderNavs()}
    </Provider>
  );
};
