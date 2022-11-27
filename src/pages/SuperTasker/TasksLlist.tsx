import { useAppSelector } from "../../hooks";
import { Task } from "./Task";

/**
 * This component exist cuz we incapsulate useSelector and dispatch logic
 * that sideeffects do not trigger the rest of the component tree
 */

export const TasksList = () => {
  const tasks = useAppSelector((state) => state.tasks);

  return (
    <>
      {tasks.entities.map((taskEntity) => (
        <Task key={taskEntity.id} taskEntity={taskEntity} />
      ))}
    </>
  );
};
