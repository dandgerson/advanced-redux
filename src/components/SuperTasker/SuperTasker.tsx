import { nanoid } from "@reduxjs/toolkit";

import "./Supertasker.scss";

const tasks = Array.from({ length: 10 }, () => ({
  id: nanoid(),
  title: "Lorem ipsum dolor sit amet.",
}));

const SuperTasker = () => {
  return (
    <div className="superTasker">
      <h3>SuperTasker</h3>

      <div className="content">
        <div className="sidebar">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const eventTarget = e.target as HTMLFormElement;
              const input = eventTarget[0] as HTMLInputElement;
              console.log({ taskTitle: input.value });
            }}
          >
            <label htmlFor="">
              Title
              <input type="text" placeholder="Title" />
            </label>
            <button>Create task</button>
          </form>
        </div>
        <div className="main">
          {tasks.map((task) => (
            <div key={task.id} className="task">
              <div className="task_content">
                <div className="task_title">{task.title}</div>
                <div className="task_author">Task Author</div>
              </div>

              <div className="task_options">
                <button className="task_remove">Remove</button>
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
