import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodo } from "../state/todos";

const todoApiSlice = createApi({
  reducerPath: "todoApiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getTodos: builder.query<ITodo[], void>({
      query: () => "/todos",
    }),
    getTodo: builder.query<ITodo, void>({
      query: (id) => `/todos/${id}`,
    }),
    toggleTodo: builder.query<ITodo, void>({
      query: (id) => `/todos/${id}`,
    }),
  }),
});

const { useGetTodosQuery, useGetTodoQuery, useToggleTodoQuery } = todoApiSlice;
export { todoApiSlice, useGetTodosQuery, useGetTodoQuery, useToggleTodoQuery };
