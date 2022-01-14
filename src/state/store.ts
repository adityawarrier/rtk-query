import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { TodoReducer } from "./todos/index";

const store = configureStore({
  reducer: {
    todos: TodoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
