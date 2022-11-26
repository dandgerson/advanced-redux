import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { tasksReducer } from "../features/tasks-slice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type ApplicationState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ApplicationState,
  unknown,
  Action<string>
>;
