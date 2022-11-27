import { CreateNewTask } from "./CreateNewTask";
import { CreateNewUser } from "./CreateNewUser";

import "./Supertasker.scss";
import { TasksList } from "./TasksLlist";
import { UsersList } from "./UsersList";

const SuperTasker = () => {
  return (
    <div className="superTasker">
      <h3>SuperTasker</h3>

      <div className="content">
        <div className="sidebar">
          <div className="tasks-section">
            <CreateNewTask />
          </div>
          <div className="users-section">
            <CreateNewUser />
            <UsersList />
          </div>
        </div>
        <div className="main">
          <TasksList />
        </div>
      </div>
    </div>
  );
};

export default SuperTasker;
