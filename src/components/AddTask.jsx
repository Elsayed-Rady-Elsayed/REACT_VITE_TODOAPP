import React, { useState, useEffect } from "react";
import { TextField } from "./TextField";
import { TextArea } from "./TextArea";
import { BackBtn } from "./BackBtn";
import { json, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { TasksAtom } from "../recoil/tasksAtom";
import "../styles/animatedButton.css";
import { auth, fireStore } from "../firebase/fireBase";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { fetchUserTasks } from "../firebase/getTasks";
import Cookies from "universal-cookie";
export const AddTask = () => {
  fetchUserTasks();
  const [clickedAdd, setClickedAdd] = useState(false);
  const [TaskAtomStored, setTaskAtomStored] = useRecoilState(TasksAtom);
  const [acceptData, setAcceptData] = useState(false);
  const [isLogineduser, setIsLoginedUser] = useState();

  const cookie = new Cookies();
  const navigator = useNavigate();
  const [TaskData, setTaskData] = useState({
    title: "",
    date: "",
    start: "",
    end: "",
    description: "",
    done: false,
    pending: false,
  });

  const handleOnChange = (evt) => {
    const { name, value } = evt.target;
    setTaskData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsLoginedUser(user);
    });
  }, []);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    auth.onAuthStateChanged(async (user) => {
      if (
        user &&
        TaskData.title.length > 0 &&
        TaskData.date.length > 0 &&
        TaskData.start.length > 0 &&
        TaskData.end.length > 0 &&
        TaskData.description.length > 0
      ) {
        await updateDoc(doc(fireStore, "Users", user.uid), {
          taskData: [...TaskAtomStored, TaskData],
        });
        navigator("/REACT_VITE_TODOAPP/home");
      } else {
        handleAcceptData();
      }
    });
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
      console.log(TaskAtomStored);
      navigator("/REACT_VITE_TODOAPP/home");
    } else {
      setAcceptData(false);
    }
  };
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
          }}
          className="btn w-full mt-2"
        >
          add task
        </button>
      </div>
    </form>
  );
};
