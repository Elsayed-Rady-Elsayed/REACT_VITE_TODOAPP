import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, fireStore } from "../firebase/fireBase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { fetchUserTasks } from "../firebase/getTasks";
import { useRecoilState } from "recoil";
import { TasksAtom } from "../recoil/tasksAtom";
export const TaskCard = (props) => {
  const nav = useNavigate();
  const reloadPage = () => {
    window.location.reload();
  };
  const [tasksRec, setTasksRec] = useRecoilState(TasksAtom);
  const goToEditProduct = () => {
    nav(`/REACT_VITE_TODOAPP/home/eidtTask/${props.id}`);
  };

  const handeSetDone = (v) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        let list = [];
        const docRef = doc(fireStore, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          list = [...docSnap.data()["taskData"]];
          list[props.id]["done"] = !v;
        }
        await updateDoc(doc(fireStore, "Users", user.uid), {
          taskData: list,
        });
        nav("/REACT_VITE_TODOAPP/home");
        reloadPage();
      } else {
        let list = [];
        list = [...tasksRec];
        list[props.id]["done"] = !v;
        setTasksRec(list);
      }
    });
  };
  const handeRemove = () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        let list = [];
        const docRef = doc(fireStore, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          list = [...docSnap.data()["taskData"]];
          list = list.filter((el, idx) => idx !== props.id);
        }
        await updateDoc(doc(fireStore, "Users", user.uid), {
          taskData: list,
        });
        nav("/REACT_VITE_TODOAPP/home");
        reloadPage();
      } else {
        let list = [];
        list = [...tasksRec];
        list = list.filter((el, idx) => idx !== props.id);
        setTasksRec(list);
      }
    });
  };

  return (
    <div
      onClick={goToEditProduct}
      className="relative overflow-hidden cursor-pointer container m-auto bg-[#222630] w-[100%] outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid hover:border-[#596A95] border-[#2B3040]"
    >
      <div className="icons absolute end-2 flex z-30">
        {props.iSdone ? (
          <i
            onClick={(event) => {
              event.stopPropagation();
              handeSetDone(props.iSdone);
            }}
            className="fa-solid fa-circle-check text-green-400 py-3 px-2"
          ></i>
        ) : (
          <i
            onClick={(event) => {
              event.stopPropagation();
              handeSetDone(props.iSdone);
            }}
            className="text-green-400 fa-regular fa-circle-check py-3 px-2"
          ></i>
        )}
        <i
          onClick={(event) => {
            event.stopPropagation();
            handeRemove();
          }}
          className="fa-regular fa-trash-can text-red-500 py-3 px-2"
        ></i>
        <i
          onClick={(event) => {
            event.stopPropagation();
            nav(`/REACT_VITE_TODOAPP/home/timer/${props.id}`);
          }}
          className="fa-solid fa-stopwatch-20 text-yellow-500 py-3 px-2"
        ></i>
      </div>
      {props.iSdone ? (
        <div className="absolute w-full h-full bg-white/20 text-green-500 text-2xl font-bold flex items-center justify-center">
          Done Task
        </div>
      ) : (
        ""
      )}

      <h2 className="cursor-pointer capitalize text-2xl m-2">{props.title}</h2>
      <p className="text-gray-500 text-[12px] m-2">{props.date}</p>
      <div className="flex gap-5 m-2">
        <div className="capitalize text-white text-[12px] ">
          <p>start : {props.start}</p>
        </div>
        <div className="capitalize text-white text-[12px]">
          <p>end : {props.end}</p>
        </div>
      </div>
      <p className="text-[10px] mt-2 text-gray-400 truncate h-7 m-2">
        {props.desciption}
      </p>
    </div>
  );
};
