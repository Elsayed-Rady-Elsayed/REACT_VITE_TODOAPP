import React from "react";
import { TaskCard } from "./TaskCard";
import { Link } from "react-router-dom";
import { TasksAtom } from "../recoil/tasksAtom";
import { useRecoilState } from "recoil";

export const ShowTasks = () => {
  const [TaskAtomStored, setTaskAtomStored] = useRecoilState(TasksAtom);
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
  console.log(TaskAtomStored);
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 m-5 md:m-3 gap-3 mt-3">
      <Link
        to="/REACT_VITE_TODOAPP/home/addTask"
        className={`fixed bottom-10 right-10 cursor-pointer bg-white h-10 w-10 flex items-center justify-center rounded-[50%]`}
      >
        <i className="fa-solid fa-plus"></i>
      </Link>
      {ShowTasksToRender}
      {/* <TaskCard
        title={"task 1"}
        date={"25/11/2024"}
        start={"22:33PM"}
        end={"23:44PM"}
        desciption={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eveniet amet possimus nulla animi deleniti voluptas sequi asperiores laborum, ipsa ab omnis alias nam aut, modi quisquam ratione atque rem."
        }
      />
      <TaskCard
        title={"task 1"}
        date={"25/11/2024"}
        start={"22:33PM"}
        end={"23:44PM"}
        desciption={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eveniet amet possimus nulla animi deleniti voluptas sequi asperiores laborum, ipsa ab omnis alias nam aut, modi quisquam ratione atque rem."
        }
      />
      <TaskCard
        title={"task 1"}
        date={"25/11/2024"}
        start={"22:33PM"}
        end={"23:44PM"}
        desciption={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eveniet amet possimus nulla animi deleniti voluptas sequi asperiores laborum, ipsa ab omnis alias nam aut, modi quisquam ratione atque rem."
        }
      />
      <TaskCard
        title={"task 1"}
        date={"25/11/2024"}
        start={"22:33PM"}
        end={"23:44PM"}
        desciption={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eveniet amet possimus nulla animi deleniti voluptas sequi asperiores laborum, ipsa ab omnis alias nam aut, modi quisquam ratione atque rem."
        }
      /> */}
    </div>
  );
};
