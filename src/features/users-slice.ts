import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import data from "../api/data.json";

type UserState = {
  entities: User[];
};

const createUser = (draftUser: DraftUser): User => ({
  tasks: [],
  id: nanoid(),
  // spread the last cuz if the draft has the upper props - it rewrite the exist's
  ...draftUser,
});

const initialState: UserState = {
  entities: data.users.map((drafUser) => createUser(drafUser)),
};

type DraftUser = RequireOnly<User, "realName" | "alterEgo">;

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
});

export const usersReducer = usersSlice.reducer;
export const { addUser, removeUser } = usersSlice.actions;
