import React, { useEffect, useState } from "react";
import { todoApiSlice, useGetTodoQuery } from "../queries/Todos";

export const FindTodo = (): React.ReactElement => {
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(true);

  // const {
  //   data: todo,
  //   isLoading,
  //   isError,
  // } = useGetTodoQuery(search, {
  //   skip,
  // });
  const [fetchTodo, { data: todo, isError, isLoading }] =
    todoApiSlice.endpoints.getTodo.useLazyQuery();
  console.log(todo);

  // useEffect(() => {
  //   if (!skip) {
  //     setTimeout(() => {

  //       setSkip(true);
  //     }, 2000)
  //   }
  // }, [skip]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetchTodo(search);
          // setSkip(false);
        }}
      >
        Search
      </button>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error...</div>}
      {!!todo && <div>{JSON.stringify(todo, undefined, 2)}</div>}
    </div>
  );
};
