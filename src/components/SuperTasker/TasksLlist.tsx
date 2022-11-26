import { useDispatch } from "react-redux";
import { removeTask } from "../../features/tasks-slice";
import { useAppSelector } from "../../hooks";

/**
 * This component exist cuz we incapsulate useSelector and dispatch logic
 * that sideeffects do not trigger the rest of the component tree
 */

export const TasksList = () => {
  const dispatch = useDispatch();

  const tasks = useAppSelector((state) => state.tasks);

  return (
    <>
      {tasks.entities.map((taskEntity) => (
        <div key={taskEntity.id} className="task">
          <div className="task_content">
            <div className="task_title">{taskEntity.title}</div>
            <div className="task_author">Task Author</div>
          </div>

          <div className="task_options">
            <button
              className="task_remove"
              onClick={() => dispatch(removeTask({ id: taskEntity.id }))}
            >
              Remove
            </button>
            <div className="task_status">Task Status</div>
          </div>
        </div>
      ))}
    </>
  );
};
