import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { removeTask } from "../../features/tasks-slice";
import { CreateNewTask } from "./CreateNewTask";

import "./Supertasker.scss";

const SuperTasker = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  return (
    <div className="superTasker">
      <h3>SuperTasker</h3>

      <div className="content">
        <div className="sidebar">
          <CreateNewTask />
        </div>
        <div className="main">
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
        </div>
      </div>
    </div>
  );
};

export default SuperTasker;
