import { addTask, createTask, removeTask, tasksReducer } from "./tasks-slice";

describe("taskSlice", () => {
  const initialState = {
    entities: [
      createTask({ title: "Make it OMG" }),
      createTask({ title: "Make it WTF" }),
    ],
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
});
