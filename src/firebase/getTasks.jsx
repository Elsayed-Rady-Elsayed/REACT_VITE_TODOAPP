import { doc, getDoc } from "firebase/firestore";
import { auth, fireStore } from "./fireBase";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../recoil/user";
import { TasksAtom } from "../recoil/tasksAtom";
export const fetchUserTasks = async () => {
  const [tasks, setTasks] = useRecoilState(TasksAtom);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(fireStore, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setTasks((prev) => {
            return [...docSnap.data()["taskData"]];
          });
        }
      } else {
        setTasks([...JSON.parse(window.localStorage.getItem("tasks"))]);
      }
    });
  }, []);
};
