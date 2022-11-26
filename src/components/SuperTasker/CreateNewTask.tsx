import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks-slice";

export const CreateNewTask = () => {
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const eventTarget = e.target as HTMLFormElement;
        const input = eventTarget[0] as HTMLInputElement;

        dispatch(addTask({ title: input.value }));

        input.value = input.defaultValue;
      }}
    >
      <label htmlFor="new-task-title">
        Title
        <input id="new-task-title" type="text" placeholder="Title" required />
      </label>
      <button>Create task</button>
    </form>
  );
};
