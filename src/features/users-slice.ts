import {
  createAsyncThunk,
  createSlice,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useAppSelector } from "../hooks";
import { delayedFetch } from "../utils";

type UserState = {
  entities: User[];
  loading: boolean;
};

export const createUser = (draftUser: DraftUser): User => ({
  tasks: [],
  id: nanoid(),
  // spread the last cuz if the draft has the upper props - it rewrite the exist's
  ...draftUser,
});

const initialState: UserState = {
  entities: [],
  loading: false,
};

type DraftUser = RequireOnly<User, "realName" | "alterEgo">;

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (): Promise<DraftUser[]> => {
    const response = await delayedFetch("http://localhost:3002/users").then(
      (res) => res.json()
    );

    return response;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<DraftUser>) => {
      state.entities.unshift(createUser(action.payload));
    },
    removeUser: (state, action: PayloadAction<{ id: User["id"] }>) => {
      state.entities = state.entities.filter(
        (userEntity) => userEntity.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = action.payload.map((draftUser) => createUser(draftUser));
    });
  },
});

export const usersReducer = usersSlice.reducer;
export const { addUser, removeUser } = usersSlice.actions;

export const useUsers = () => {
  const users = useAppSelector((state) => state.users.entities);
  const loading = useAppSelector((state) => state.users.loading);

  return useMemo(() => [users, loading] as const, [users, loading]);
};
