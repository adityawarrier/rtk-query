import { configureStore } from "@reduxjs/toolkit";
import { todoApiSlice } from "../queries/Todos";
import { TodoReducer } from "./todos/index";

const store = configureStore({
  reducer: {
    todos: TodoReducer,
    [todoApiSlice.reducerPath]: todoApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
