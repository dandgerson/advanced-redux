import { createAction, createReducer } from "@reduxjs/toolkit";

type CounterState = {
  count: number;
};

export const increment = createAction("INCREMENT", (amount: number) => ({
  payload: amount,
}));
export const decrement = createAction("DECREMENT", (amount: number) => ({
  payload: amount,
}));

export const reset = createAction("RESET");

export const set = createAction("SET", (amount: number) => ({
  payload: amount,
}));

export const initialState: CounterState = { count: 0 };

type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>
  | ReturnType<typeof set>;

export const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state, action) => {
    state.count += action.payload;
  });
  builder.addCase(decrement, (state, action) => {
    state.count -= action.payload;
  });
  builder.addCase(set, (state, action) => {
    state.count = action.payload;
  });
  builder.addCase(reset, () => initialState);
});
