import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

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
        nav("/home");
        reloadPage();
      } else {
        setTasksRec((prevList) =>
          prevList.map((item, idx) =>
            idx === id ? { ...item, done: !item.done } : item
          )
        );
        nav("/home");
      }
    });
  };
  return (
    <div className="text-center flex flex-col items-center">
      <div className="timer w-56 border p-5 text-2xl mt-6 border-[#596A95] rounded-lg text-white">
        {formatTime(seconds)}
      </div>
      <div className="btns flex flex-col md:flex-row w-full gap-2 mt-5">
        <button
          className="btn bg-red-500 w-full"
          onClick={() => {
            handeSetDone();
          }}
        >
          End Task
        </button>
        <button
          className="btn bg-yellow-500 w-full"
          onClick={() => {
            nav("/home");
            reloadPage();
          }}
        >
          Pend Task
        </button>
      </div>
    </div>
  );
};
