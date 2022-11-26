import { FC } from "react";
import { removeTask } from "../../features/tasks-slice";
import { useAppDispatch } from "../../hooks";
type Props = {
  taskEntity: Task;
};

export const Task: FC<Props> = ({ taskEntity }) => {
  const dispatch = useAppDispatch();

  return (
    <div key={taskEntity.id} className="task">
      <div className="task_details">
        <div className="task_title">{taskEntity.title}</div>
        <div className="task_author">
          {taskEntity?.user?.alterEgo ?? "No assign user"}
        </div>
      </div>

      <div className="task_options">
        <div className="task_status">Task Status</div>
        <button
          className="button button-danger"
          onClick={() => dispatch(removeTask({ id: taskEntity.id }))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
