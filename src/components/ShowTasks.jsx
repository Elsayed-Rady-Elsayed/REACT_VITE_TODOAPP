import React, { useEffect, useState } from "react";
import { TaskCard } from "./TaskCard";
import { Link } from "react-router-dom";
import { TasksAtom } from "../recoil/tasksAtom";
import { useRecoilState } from "recoil";
import { Alert } from "./Alert";
import { fetchUserData } from "../firebase/getUserData";
import { userAtom } from "../recoil/user";
import { auth } from "../firebase/fireBase";
import { fetchUserTasks } from "../firebase/getTasks";
export const ShowTasks = () => {
  fetchUserTasks();
  const [TaskAtomStored, setTaskAtomStored] = useRecoilState(TasksAtom);
  const [isLogineduser, setIsLoginedUser] = useState();
  const ShowTasksToRender = TaskAtomStored.map((task, idx) => {
    return (
      <TaskCard
        iSdone={task.done}
        key={idx}
        id={idx}
        title={task.title}
        date={task.date}
        start={task.start}
        end={task.end}
        desciption={task.description}
      />
    );
  });
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsLoginedUser(user);
    });
  }, []);
  return (
    <>
      {isLogineduser ? "" : <Alert />}
      <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 m-5 md:m-3 gap-3 mt-3">
        <Link
          to="/REACT_VITE_TODOAPP/home/addTask"
          className={`fixed bottom-10 right-10 cursor-pointer bg-white h-10 w-10 flex items-center justify-center rounded-[50%] hover:rotate-90 transition-all duration-500`}
        >
          <i className="fa-solid fa-plus"></i>
        </Link>
        {ShowTasksToRender.length > 0 && isLogineduser != null ? (
          ShowTasksToRender
        ) : ShowTasksToRender.length == 0 &&
          (isLogineduser == null || isLogineduser != null) ? (
          <div
            className="w-full text-gray-400 text-sm text-center capitalize absolute top-1/2 left-1/2"
            style={{
              transform: "translate(-50%,-50%)",
            }}
          >
            no tasks yet
          </div>
        ) : ShowTasksToRender.length > 0 && isLogineduser == null ? (
          ShowTasksToRender
        ) : (
          <div className="loader">
            <div className="square" id="sq1"></div>
            <div className="square" id="sq2"></div>
            <div className="square" id="sq3"></div>
            <div className="square" id="sq4"></div>
            <div className="square" id="sq5"></div>
            <div className="square" id="sq6"></div>
            <div className="square" id="sq7"></div>
            <div className="square" id="sq8"></div>
            <div className="square" id="sq9"></div>
          </div>
        )}
      </div>
    </>
  );
};
