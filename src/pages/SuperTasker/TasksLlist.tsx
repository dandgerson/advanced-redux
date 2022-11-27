import { Loading } from "../../components/Loading";
import { useTasks } from "../../features/tasks-slice";
import { Task } from "./Task";

/**
 * This component exist cuz we incapsulate useSelector and dispatch logic
 * that sideeffects do not trigger the rest of the component tree
 */

export const TasksList = () => {
  const [tasks, loading] = useTasks();
  return (
    <>
      <Loading loading={loading} />
      {tasks.map((task) => (
        <Task key={task.id} taskEntity={task} />
      ))}
    </>
  );
};
