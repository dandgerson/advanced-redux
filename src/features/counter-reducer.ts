import { createAction } from "@reduxjs/toolkit";

type CounterState = {
  count: number;
};

const increment = createAction("INCREMENT", (amount: number) => ({
  payload: amount,
}));
const decrement = createAction("DECREMENT", (amount: number) => ({
  payload: amount,
}));
const reset = createAction("RESET");

const initialState: CounterState = { count: 0 };

type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>;

export const reducer = (state = initialState, action: CounterAction) => {
  if (action.type === increment.type) {
    return { count: state.count + action.payload };
  }

  if (action.type === decrement.type) {
    return { count: state.count - action.payload };
  }

  if (action.type === reset.type) {
    return initialState;
  }
  return state;
};
