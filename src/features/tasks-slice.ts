import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TaskState = {
  entities: Task[];
};

const initialState: TaskState = {
  entities: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.entities.unshift(action.payload);
    },
    removeTask: (state) => state,
  },
});
