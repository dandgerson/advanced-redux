import { useAppSelector } from "../../hooks";
import { User } from "./User";

/**
 * This component exist cuz we incapsulate useSelector and dispatch logic
 * that sideeffects do not trigger the rest of the component tree
 */

export const UsersList = () => {
  const users = useAppSelector((state) => state.users);

  return (
    <>
      {users.entities.map((userEntity) => (
        <User key={userEntity.id} userEntity={userEntity} />
      ))}
    </>
  );
};
