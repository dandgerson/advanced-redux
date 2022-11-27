// Pick<Task, 'title'>
// Partial<Task>
type RequireOnly<T, P extends keyof T> = Pick<T, P> & Partial<Omit<T, P>>;

type User = {
  id: string;
  realName: string;
  alterEgo: string;
  tasks: Task["id"][];
};

type Task = {
  id: string;
  title: string;
  user?: User["id"];
  column?: StatusColumn["id"];
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

type Item = {
  id: string;
  name: string;
  packed: boolean;
};
