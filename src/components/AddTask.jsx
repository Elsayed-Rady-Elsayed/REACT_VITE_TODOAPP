import React, { useState } from "react";
import { TextField } from "./TextField";
import { TextArea } from "./TextArea";
import { BackBtn } from "./BackBtn";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { TasksAtom } from "../recoil/tasksAtom";
export const AddTask = () => {
  const navigator = useNavigate();
  const [TaskData, setTaskData] = useState({
    title: "",
    date: "",
    start: "",
    end: "",
    description: "",
  });
  const [clickedAdd, setClickedAdd] = useState(false);
  const [TaskAtomStored, setTaskAtomStored] = useRecoilState(TasksAtom);
  const [acceptData, setAcceptData] = useState(false);
  const handleOnChange = (evt) => {
    const { name, value } = evt.target;
    setTaskData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  const handleAcceptData = () => {
    if (
      TaskData.title.length > 0 &&
      TaskData.date.length > 0 &&
      TaskData.start.length > 0 &&
      TaskData.end.length > 0 &&
      TaskData.description.length > 0
    ) {
      setAcceptData(true);
      setTaskAtomStored((prev) => {
        return [...prev, TaskData];
      });
      navigator("/REACT_VITE_TODOAPP/home");
    } else {
      setAcceptData(false);
    }
  };
  console.log(TaskData);
  console.log(TaskAtomStored);
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full absolute left-1/2 top-1/2 flex justify-center p-2 md:p-0"
      style={{
        transform: "translate(-50%,-50%)",
      }}
    >
      <div className="grid grid-cols-1 gap-2">
        <BackBtn path={"/home"} />
        <TextField
          setClicked={clickedAdd}
          name="title"
          placeholder={"Title"}
          type={"text"}
          value={handleOnChange}
        />
        <TextField
          setClicked={clickedAdd}
          value={handleOnChange}
          name="date"
          placeholder={"date"}
          type={"date"}
        />
        <div className="time grid grid-cols-2 gap-2 w-full">
          <TextField
            setClicked={clickedAdd}
            value={handleOnChange}
            name="start"
            placeholder={"start time"}
            type={"time"}
          />
          <TextField
            setClicked={clickedAdd}
            value={handleOnChange}
            name="end"
            placeholder={"end time"}
            type={"time"}
          />{" "}
        </div>
        <TextArea
          setClicked={clickedAdd}
          value={handleOnChange}
          name="description"
          placeholder={"description"}
        />
        <button
          onClick={() => {
            setClickedAdd(true);
            handleAcceptData();
          }}
          className="bg-white rounded-2xl p-2 transition-all border border-transparent hover:border-white hover:bg-transparent hover:text-white"
        >
          add task
        </button>
      </div>
    </form>
  );
};
