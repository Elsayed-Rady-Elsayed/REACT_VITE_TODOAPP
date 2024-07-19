import { doc, getDoc } from "firebase/firestore";
import { auth, fireStore } from "./fireBase";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../recoil/user";
export const fetchUserData = async () => {
  const [user, setUser] = useRecoilState(userAtom);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(fireStore, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUser(docSnap.data());
        }
      }
    });
  }, []);
};
