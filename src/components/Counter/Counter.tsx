import { useReducer } from "react";
import {
  counterReducer,
  increment,
  decrement,
  reset,
  set,
  initialState,
} from "../../features/counter-reducer";

export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div
      className="counter"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>Days since last incident:</div>
      <div>{state.count}</div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button onClick={() => dispatch(increment(1))}>Increment</button>
        <button onClick={() => dispatch(decrement(1))}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const target = e.target as HTMLFormElement;
          const input = target[0] as HTMLInputElement;
          dispatch(set(Number(input.value)));
          input.value = input.defaultValue;
        }}
      >
        <input type="number" defaultValue={0} />
        <button>Update counter</button>
      </form>
    </div>
  );
};
