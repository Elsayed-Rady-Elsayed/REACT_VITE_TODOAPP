import { atom } from "recoil";
export const TasksAtom = atom({
  key: "TasksAtom", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
