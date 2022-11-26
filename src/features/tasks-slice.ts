import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import data from "../api/data.json";

export type TaskState = {
  entities: Task[];
};

type DraftTask = RequireOnly<Task, "title">;

const createTask = (draftTask: DraftTask): Task => ({
  id: nanoid(),
  ...draftTask,
});

const initialState: TaskState = {
  entities: data.tasks.map((draftTask) => createTask(draftTask)),
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      state.entities.unshift(createTask(action.payload));
    },
    removeTask: (state, action: PayloadAction<{ id: Task["id"] }>) => {
      state.entities = state.entities.filter(
        (taskEntity) => taskEntity.id !== action.payload.id
      );
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;
