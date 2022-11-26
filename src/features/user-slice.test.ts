import { addUser, createUser, removeUser, usersReducer } from "./users-slice";

describe("userSlice", () => {
  const initialState = {
    entities: [
      createUser({ realName: "Omg", alterEgo: "OMG" }),
      createUser({ realName: "Wtf", alterEgo: "WTF" }),
    ],
  };

  it(`should add user when the ${addUser}`, () => {
    const user = createUser({ realName: "Bbq", alterEgo: "BBQ" });
    const action = addUser(user);
    const newState = usersReducer(initialState, action);

    expect(newState.entities).toEqual([user, ...initialState.entities]);
  });

  it(`should remove task when the ${removeUser}`, () => {
    const userForRemove = initialState.entities[0];
    const action = removeUser({ id: userForRemove.id });
    const newState = usersReducer(initialState, action);

    expect(newState.entities).toEqual(
      initialState.entities.filter((user) => user.id !== userForRemove.id)
    );
  });
});
