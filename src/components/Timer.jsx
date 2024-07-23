import React, { useEffect, useRef, useState } from "react";
import "./Timer.css";
import { useNavigate } from "react-router-dom";
import { auth, fireStore } from "../firebase/fireBase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { TasksAtom } from "../recoil/tasksAtom";
export const Timer = (props) => {
  const [t, sett] = useState("");
  const nav = useNavigate();
  const id = Number(window.location.pathname.split("/").splice(-1).join());
  const [tasksRec, setTasksRec] = useRecoilState(TasksAtom);
  let time = "";
  const reloadPage = () => {
    window.location.reload();
  };
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {
    let intervalId;
    if (start) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [start]);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    // Ensure hours, minutes, and seconds are formatted to two digits
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };
  const handeSetDone = () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        let list = [];
        const docRef = doc(fireStore, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          list = [...docSnap.data()["taskData"]];
          list[id]["done"] = true;
        }
        await updateDoc(doc(fireStore, "Users", user.uid), {
          taskData: list,
        });
        nav("/REACT_VITE_TODOAPP/home");
        reloadPage();
      } else {
        setTasksRec((prevList) =>
          prevList.map((item, idx) =>
            idx === id ? { ...item, done: true } : item
          )
        );
        nav("/REACT_VITE_TODOAPP/home");
      }
    });
  };

  return (
    <div className="text-center flex flex-col items-center  w-4/5 m-auto ">
      <div className="timer flex items-center justify-center border-4 h-40 w-40 text-3xl mt-6 border-[#596A95] spin rounded-full rounded-lg text-white">
        {formatTime(seconds)}
      </div>
      <div className="btns justify-center items-center flex  md:flex-row w-full gap-2 mt-5">
        <button
          className="btn bg-lime-500 w-20 text-sm"
          onClick={() => {
            setStart(true);
          }}
        >
          Start
        </button>
        <button
          className="btn bg-green-500 w-20 text-sm"
          onClick={() => {
            handeSetDone();
            setStart(false);
          }}
        >
          Done
        </button>
        <button
          className="btn bg-yellow-500 w-20 text-sm"
          onClick={() => {
            nav("/REACT_VITE_TODOAPP/home");
            reloadPage();
            setStart(false);
          }}
        >
          Pend
        </button>
        <button
          className="btn bg-red-500 w-20 text-sm"
          onClick={() => {
            setStart(false);
          }}
        >
          Stop
        </button>
      </div>
    </div>
  );
};
