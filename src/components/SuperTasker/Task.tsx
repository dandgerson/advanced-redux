import { FC } from "react";
import { removeTask } from "../../features/tasks-slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
type Props = {
  taskEntity: Task;
};

export const Task: FC<Props> = ({ taskEntity }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) =>
    state.users.entities.find((user) => user.id === taskEntity.user)
  );

  return (
    <div key={taskEntity.id} className="task">
      <div className="task_details">
        <div className="task_title">{taskEntity.title}</div>
        <div className="task_author">{user?.alterEgo ?? "No one assigned"}</div>
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
