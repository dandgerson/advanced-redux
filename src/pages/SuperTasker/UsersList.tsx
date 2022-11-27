import { Loading } from "../../components/Loading";
import { useUsers } from "../../features/users-slice";
import { User } from "./User";

/**
 * This component exist cuz we incapsulate useSelector and dispatch logic
 * that sideeffects do not trigger the rest of the component tree
 */

export const UsersList = () => {
  const [users, loading] = useUsers();
  return (
    <>
      <Loading loading={loading} />
      {users.map((user) => (
        <User key={user.id} userEntity={user} />
      ))}
    </>
  );
};
