import React, { useState, useEffect, useRef } from "react";
import { TextField } from "./TextField";
import { TextArea } from "./TextArea";
import { BackBtn } from "./BackBtn";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { TasksAtom } from "../recoil/tasksAtom";
import "../styles/animatedButton.css";
import { auth, fireStore } from "../firebase/fireBase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { fetchUserTasks } from "../firebase/getTasks";
export const EditTask = () => {
  fetchUserTasks();
  const [TaskAtomStored, setTaskAtomStored] = useRecoilState(TasksAtom);
  const taskId = window.location.pathname.split("/").slice(-1).join();
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
  const [clickedAdd, setClickedAdd] = useState(false);
  const [acceptData, setAcceptData] = useState(false);
  useEffect(() => {
    if (TaskAtomStored[taskId] != null) {
      setTaskData(TaskAtomStored[taskId]);
    }
  }, []);

  const handleOnChange = (evt) => {
    const { name, value } = evt.target;
    setTaskData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const [isLogineduser, setIsLoginedUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsLoginedUser(user);
    });
  }, []);

  const [newTasks, setNewTasks] = useState([]);
  function editObjectByIndex(index, newObject) {
    if (index >= 0 && index < TaskAtomStored.length) {
      TaskAtomStored[index] = { ...TaskAtomStored[index], ...newObject };
      console.log(`Object at index ${index} has been updated to:`, list[index]);
    } else {
      console.log("Index out of bounds");
    }
  }
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
        let list = [];
        const docRef = doc(fireStore, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          list = [...docSnap.data()["taskData"]];
          list[taskId] = TaskData;
        }
        await updateDoc(doc(fireStore, "Users", user.uid), {
          taskData: list,
        });
        navigator("/REACT_VITE_TODOAPP/home");
      } else {
        // handleAcceptData();
        // navigator("/REACT_VITE_TODOAPP/home");
      }
    });
  };
  const inputRef1 = useRef(0);
  const inputRef2 = useRef(0);
  const inputRef3 = useRef(0);
  const inputRef4 = useRef(0);
  const inputRef5 = useRef(0);
  const [val, setVal] = useState("");
  const focusInput = (color, i) => {
    i.current.style.borderColor = color;
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
        <BackBtn path={"/REACT_VITE_TODOAPP/home"} />
        <div className="flex flex-col text-white/80 capitalize font-light">
          <label className="mb-2" htmlFor={"Title"}>
            {"Title"}
          </label>
          <input
            ref={inputRef1}
            style={{
              boxShadow: "inset 2px 5px 10px rgba(0, 0, 0, 0.3)",
            }}
            id={"title"}
            placeholder={"Title"}
            className="bg-[#222630] w-[100%] px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
            name={"title"}
            autoComplete="off"
            type={"text"}
            value={TaskData.title}
            onChange={(evt) => {
              if (evt.target.value === "") {
                focusInput("red", inputRef1);
              } else {
                focusInput("#596A95", inputRef1);
              }
              if (evt.target.name == "title") {
                if (evt.target.value.trim() === "") {
                  focusInput("red", inputRef1);
                }
              }
              handleOnChange(evt);
            }}
          />
        </div>
        <div className="flex flex-col text-white/80 capitalize font-light">
          <label className="mb-2" htmlFor={"date"}>
            {"date"}
          </label>
          <input
            ref={inputRef2}
            style={{
              boxShadow: "inset 2px 5px 10px rgba(0, 0, 0, 0.3)",
            }}
            id={"date"}
            placeholder={"date"}
            className="bg-[#222630] w-[100%] px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
            name={"date"}
            autoComplete="off"
            type={"date"}
            value={TaskData.date}
            onChange={(evt) => {
              if (evt.target.value === "") {
                focusInput("red", inputRef2);
              } else {
                focusInput("#596A95", inputRef2);
              }
              if (evt.target.name == "title") {
                if (evt.target.value.trim() === "") {
                  focusInput("red", inputRef2);
                }
              }
              handleOnChange(evt);
            }}
          />
        </div>
        <div className="time grid grid-cols-2 gap-2 w-full">
          <div className="flex flex-col text-white/80 capitalize font-light">
            <label className="mb-2" htmlFor={"start"}>
              {"start time"}
            </label>
            <input
              ref={inputRef3}
              style={{
                boxShadow: "inset 2px 5px 10px rgba(0, 0, 0, 0.3)",
              }}
              id={"start"}
              placeholder={"start time"}
              className="bg-[#222630] w-[100%] px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
              name={"start"}
              autoComplete="off"
              type={"time"}
              value={TaskData.start}
              onChange={(evt) => {
                if (evt.target.value === "") {
                  focusInput("red", inputRef3);
                } else {
                  focusInput("#596A95", inputRef3);
                }
                if (evt.target.name == "title") {
                  if (evt.target.value.trim() === "") {
                    focusInput("red", inputRef3);
                  }
                }
                handleOnChange(evt);
              }}
            />
          </div>
          <div className="flex flex-col text-white/80 capitalize font-light">
            <label className="mb-2" htmlFor={"end"}>
              {"end time"}
            </label>
            <input
              ref={inputRef4}
              style={{
                boxShadow: "inset 2px 5px 10px rgba(0, 0, 0, 0.3)",
              }}
              id={"end"}
              placeholder={"end time"}
              className="bg-[#222630] w-[100%] px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
              name={"end"}
              autoComplete="off"
              type={"time"}
              value={TaskData.end}
              onChange={(evt) => {
                if (evt.target.value === "") {
                  focusInput("red", inputRef4);
                } else {
                  focusInput("#596A95", inputRef4);
                }
                if (evt.target.name == "title") {
                  if (evt.target.value.trim() === "") {
                    focusInput("red", inputRef4);
                  }
                }
                handleOnChange(evt);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col text-white/80 capitalize font-light">
          <label className="mb-2" htmlFor={"description"}>
            {"description"}
          </label>
          <textarea
            ref={inputRef5}
            value={TaskData.description}
            rows="5"
            name={"description"}
            autoComplete="off"
            placeholder={"description"}
            id={"description"}
            style={{
              resize: "none",
              boxShadow: "inset 2px 5px 10px rgba(0, 0, 0, 0.3)",
            }}
            onChange={(evt) => {
              if (evt.target.value === "") {
                focusInput("red", inputRef5);
              } else {
                focusInput("#596A95", inputRef5);
              }
              if (evt.target.name == "title") {
                if (evt.target.value.trim() === "") {
                  focusInput("red", inputRef5);
                }
              }
              handleOnChange(evt);
            }}
            className="bg-[#222630] w-full px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
          ></textarea>
        </div>
        <button
          onClick={() => {
            setClickedAdd(true);
          }}
          className="btn w-full mt-2"
        >
          edit task
        </button>
      </div>
    </form>
  );
};
