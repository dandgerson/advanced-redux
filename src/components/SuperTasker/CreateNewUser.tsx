import { addUser } from "../../features/users-slice";
import { useAppDispatch } from "../../hooks";

export const CreateNewUser = () => {
  const dispatch = useAppDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const eventTarget = e.target as HTMLFormElement;
        const realNameInput = eventTarget[0] as HTMLInputElement;
        const alterEgoInput = eventTarget[1] as HTMLInputElement;

        dispatch(
          addUser({
            realName: realNameInput.value,
            alterEgo: alterEgoInput.value,
          })
        );

        realNameInput.value = realNameInput.defaultValue;
        alterEgoInput.value = alterEgoInput.defaultValue;
      }}
    >
      <label htmlFor="new-user-real-name">
        Real Name
        <input
          id="new-user-real-name"
          type="text"
          placeholder="Real Name"
          required
        />
      </label>
      <label htmlFor="new-user-alter-ego">
        alter Ego
        <input
          id="new-user-alter-ego"
          type="text"
          placeholder="alter Ego"
          required
        />
      </label>
      <button>Create User</button>
    </form>
  );
};
