import { addTask, createTask, removeTask, tasksReducer } from "./tasks-slice";
import { createUser, removeUser } from "./users-slice";

const data = {
  users: [
    {
      realName: "Dmitry G. Anderson",
      alterEgo: "Dandgerson",
      id: "omgwtfbbq",
    },
  ],
  tasks: [
    { title: "Fuck off all Twats around", user: "omgwtfbbq" },
    { title: "Go for the market", user: "omgwtfbbq" },
  ],
};

describe("taskSlice", () => {
  const initialState = {
    entities: data.tasks.map((draftTask) => createTask(draftTask)),
  };

  it(`should add task when the ${addTask}`, () => {
    const task = createTask({ title: "Make it BBQ" });
    const action = addTask(task);
    const newState = tasksReducer(initialState, action);

    expect(newState.entities).toEqual([task, ...initialState.entities]);
  });

  it(`should remove task when the ${removeTask}`, () => {
    const taskForRemove = initialState.entities[0];
    const action = removeTask({ id: taskForRemove.id });
    const newState = tasksReducer(initialState, action);

    expect(newState.entities).toEqual(
      initialState.entities.filter((task) => task.id !== taskForRemove.id)
    );
  });

  it(`should remove all user id from tasks.user when the ${removeUser}`, () => {
    const userId = createUser(data.users[0]).id;
    const action = removeUser({ id: userId });
    const newState = tasksReducer(initialState, action);

    expect(newState.entities).toEqual(
      initialState.entities.map((task) => {
        const needEntries = Object.entries(task).filter(
          (entry) => entry[0] !== "user"
        );
        return Object.fromEntries(needEntries);
      })
    );
  });
});
