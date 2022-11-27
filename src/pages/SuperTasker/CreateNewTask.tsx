import { addTask } from "../../features/tasks-slice";
import { useAppDispatch } from "../../hooks";

export const CreateNewTask = () => {
  const dispatch = useAppDispatch();
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
