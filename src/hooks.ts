import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ApplicationState } from "./app/store";

export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;
