import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodo } from "../state/todos";

const todoApiSlice = createApi({
  reducerPath: "todoApiSlice",

  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),

  tagTypes: ["Todos"],

  endpoints: (builder) => ({
    getTodos: builder.query<ITodo[], void>({
      query: () => "/todos",
      providesTags: ["Todos"],
    }),
    addTodo: builder.mutation<void, ITodo>({
      query: (todo) => ({
        url: `/todos`,
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    toggleTodo: builder.mutation<void, { id: number; completed: boolean }>({
      query: ({ id, completed }) => ({
        url: `/todos/${id}`,
        method: "PATCH",
        body: {
          completed,
        },
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation<void, number>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

const {
  useGetTodosQuery,
  useToggleTodoMutation,
  useDeleteTodoMutation,
  useAddTodoMutation,
} = todoApiSlice;
export {
  todoApiSlice,
  useGetTodosQuery,
  useToggleTodoMutation,
  useDeleteTodoMutation,
  useAddTodoMutation,
};
