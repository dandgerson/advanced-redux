import { createAction } from "@reduxjs/toolkit";

type CounterState = {
  count: number;
};

type CounterAction =
  | {
      type: "INCREMENT" | "DECREMENT";
      payload: number;
    }
  | { type: "RESET" };

const increment = createAction("INCREMENT", (amount: number) => ({
  payload: amount,
}));
const decrement = createAction("DECREMENT", (amount: number) => ({
  payload: amount,
}));
const reset = createAction("RESET");

increment();

const initialState: CounterState = { count: 0 };

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
