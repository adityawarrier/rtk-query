import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodosState {
  todos: ITodo[];
}

const initialState = {
  todos: [
    {
      title: "Aditya",
      completed: true,
      id: 1,
    },
  ],
} as TodosState;

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (
      state: TodosState,
      action: PayloadAction<Pick<ITodo, "title" | "completed">>
    ): void => {
      const length = state.todos.length;
      state.todos.push({ ...action.payload, id: length });
    },
    deleteTodo: (state: TodosState, action: PayloadAction<number>): void => {
      const id = action.payload;

      const index = state.todos.findIndex((t) => t.id === id);
      if (index === -1) return;

      state.todos.splice(index, 1);
    },
    toggleTodo: (state: TodosState, action: PayloadAction<number>): void => {
      const id = action.payload;

      const item = state.todos.find((t) => t.id === id);
      if (!item) return;

      item.completed = !item.completed;
    },
  },
});

const actions = todoSlice.actions;
const reducer = todoSlice.reducer;

export { actions as TodoActions, reducer as TodoReducer };
export type { ITodo };
