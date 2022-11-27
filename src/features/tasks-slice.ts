import {
  createAsyncThunk,
  createSlice,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useAppSelector } from "../hooks";
import { delayedFetch } from "../utils";
import { removeUser } from "./users-slice";

export type TaskState = {
  entities: Task[];
  loading: boolean;
};

type DraftTask = RequireOnly<Task, "title">;

export const createTask = (draftTask: DraftTask): Task => ({
  id: nanoid(),
  ...draftTask,
});

const initialState: TaskState = {
  entities: [],
  loading: false,
};

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (): Promise<DraftTask[]> => {
    const response = await delayedFetch("http://localhost:3002/tasks").then(
      (res) => res.json()
    );
    return response;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(removeUser, (state, action) => {
      const userId = action.payload.id;
      state.entities.forEach((task) => {
        if (task.user === userId) {
          task.user = undefined;
        }
      });
    });

    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = action.payload.map((drafTask) => createTask(drafTask));
    });
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;

export const useTasks = () => {
  const tasks = useAppSelector((state) => state.tasks.entities);
  const loading = useAppSelector((state) => state.tasks.loading);

  return useMemo(() => [tasks, loading] as const, [tasks, loading]);
};
