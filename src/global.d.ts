// Pick<Task, 'title'>
// Partial<Task>
type RequireOnly<T, P extends keyof T> = Pick<T, P> & Partial<Omit<T, P>>;

type Task = {
  id: string;
  title: string;
  user?: User;
  column?: StatusColumn["id"];
};

type User = {
  id: string;
  realName: string;
  alterEgo: string;
  tasks: Task["id"][];
};

type StatusColumn = {
  id: string;
  tasks: Task["id"][];
  title: Status;
};

type Status =
  | "Backburner"
  | "Ready"
  | "In Progress"
  | "Verifying"
  | "Waiting for Deployment"
  | "Deployed";
