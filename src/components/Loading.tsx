import { FC } from "react";

export const Loading: FC<{ loading: boolean }> = ({ loading }) => {
  if (!loading) return null;

  return <div className="loader">...Loading</div>;
};
