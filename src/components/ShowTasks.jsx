import React from "react";
import { TaskCard } from "./TaskCard";
import { Link } from "react-router-dom";
import { TasksAtom } from "../recoil/tasksAtom";
import { useRecoilState } from "recoil";
import { Alert } from "./Alert";
import Cookies from "universal-cookie";
export const ShowTasks = () => {
  const [TaskAtomStored, setTaskAtomStored] = useRecoilState(TasksAtom);
  const cookie = new Cookies();
  const ShowTasksToRender = TaskAtomStored.map((task, idx) => {
    return (
      <TaskCard
        key={idx}
        title={task.title}
        date={task.date}
        start={task.start}
        end={task.end}
        desciption={task.description}
      />
    );
  });
  return (
    <>
      {cookie.get("isLogined") ? "" : <Alert />}
      <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 m-5 md:m-3 gap-3 mt-3">
        <Link
          to="/REACT_VITE_TODOAPP/home/addTask"
          className={`fixed bottom-10 right-10 cursor-pointer bg-white h-10 w-10 flex items-center justify-center rounded-[50%] hover:rotate-90 transition-all duration-500`}
        >
          <i className="fa-solid fa-plus"></i>
        </Link>
        {ShowTasksToRender}
      </div>
    </>
  );
};
