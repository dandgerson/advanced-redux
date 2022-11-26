import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export type TaskState = {
  entities: Task[];
};

type DraftTask = RequireOnly<Task, "title">;

const createTask = (draftTask: DraftTask): Task => ({
  ...draftTask,
  id: nanoid(),
});

const initialState: TaskState = {
  entities: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      state.entities.unshift(createTask(action.payload));
    },
    removeTask: (state, action: PayloadAction<{ id: string }>) => {
      state.entities = state.entities.filter(
        (taskEntity) => taskEntity.id !== action.payload.id
      );
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;
