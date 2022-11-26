import { FC } from "react";
import { removeUser } from "../../features/users-slice";
import { useAppDispatch } from "../../hooks";

type Props = {
  userEntity: User;
};

export const User: FC<Props> = ({ userEntity }) => {
  const dispatch = useAppDispatch();

  return (
    <div key={userEntity.id} className="user">
      <div className="user_details">
        <div className="user_alterEgo">{userEntity.alterEgo}</div>
        <div className="user_realName">{userEntity.realName}</div>
      </div>
      <div className="user_options">
        <button
          className="button button-danger"
          onClick={() => dispatch(removeUser({ id: userEntity.id }))}
        >
          Remove
        </button>
        <button className="button">Edit</button>
      </div>
    </div>
  );
};
