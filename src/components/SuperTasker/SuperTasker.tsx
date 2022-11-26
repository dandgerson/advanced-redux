import { CreateNewTask } from "./CreateNewTask";

import "./Supertasker.scss";
import { TasksList } from "./TasksLlist";

const SuperTasker = () => {
  return (
    <div className="superTasker">
      <h3>SuperTasker</h3>

      <div className="content">
        <div className="sidebar">
          <CreateNewTask />
        </div>
        <div className="main">
          <TasksList />
        </div>
      </div>
    </div>
  );
};

export default SuperTasker;
