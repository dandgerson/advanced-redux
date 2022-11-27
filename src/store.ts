import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { tasksReducer } from "./features/tasks-slice";
import { usersReducer } from "./features/users-slice";
import { itemApi } from "./services/api-service";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    users: usersReducer,
    [itemApi.reducerPath]: itemApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemApi.middleware),
});

export type ApplicationDispatch = typeof store.dispatch;
export type ApplicationState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ApplicationState,
  unknown,
  Action<string>
>;
