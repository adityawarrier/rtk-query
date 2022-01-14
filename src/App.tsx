import { Provider } from "react-redux";
import { TodoList } from "./components/TodoList";
import { store } from "./state/store";

export const App = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <h1>Todo List</h1>
      <TodoList />
    </Provider>
  );
};
