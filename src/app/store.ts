import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { tasksReducer } from "../features/tasks-slice";
import { usersReducer } from "../features/users-slice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    users: usersReducer,
  },
});

export type ApplicationDispatch = typeof store.dispatch;
export type ApplicationState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ApplicationState,
  unknown,
  Action<string>
>;
