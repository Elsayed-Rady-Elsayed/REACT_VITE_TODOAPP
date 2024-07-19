import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "./TextField";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireStore } from "../firebase/fireBase";
import { AuthAlert } from "./AuthAlert";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { userAtom } from "../recoil/user";
export const Register = () => {
  const navigator = useNavigate();
  const [acceptData, setAcceptData] = useState(false);
  const [clickedAdd, setClickedAdd] = useState(false);
  const [userData, setUserData] = useRecoilState(userAtom);

  const [alertData, setAlertData] = useState({
    color: "",
    title: "",
  });
  const [UserData, setUserata] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const handleAcceptData = () => {
    if (
      UserData.email.length > 0 &&
      UserData.password.length > 6 &&
      UserData.firstName.length > 0 &&
      UserData.lastName.length > 0
    ) {
      setAcceptData(true);
    } else {
      setAcceptData(false);
    }
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (acceptData) {
      try {
        await createUserWithEmailAndPassword(
          auth,
          UserData.email,
          UserData.password
        );
        const user = auth.currentUser;
        if (user) {
          await setDoc(doc(fireStore, "Users", user.uid), {
            email: user.email,
            firstName: UserData.firstName,
            lastName: UserData.lastName,
          });
        }
        setAlertData({
          color: "bg-green-500",
          title: "account created successfully",
        });
        setTimeout(() => {
          navigator("/REACT_VITE_TODOAPP/home");
        }, 500);
      } catch (e) {
        setAlertData({
          color: "bg-red-500",
          title: "couldnot create your account",
        });
        console.log(e);
      }
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(fireStore, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }
    });
  }, []);

  const handleOnChange = (evt) => {
    const { name, value } = evt.target;
    setUserata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <>
      {acceptData && clickedAdd ? (
        <AuthAlert title={alertData.title} color={alertData.color} />
      ) : (
        ""
      )}
      <div
        className="w-[90%] md:w-[50%] lg:w-[30%] h-fit absolute top-1/2 left-1/2 p-2 bg-[#222630] px-3 py-2 outline-none text-white rounded-lg border-2 border-solid border-[#2B3040]"
        style={{
          transform: "translate(-50%,-50%)",
        }}
      >
        <form onSubmit={handleSubmit} action="">
          <h2 className="font-semibold text-xl text-center mb-4">Register</h2>
          <TextField
            setClicked={clickedAdd}
            name="email"
            placeholder={"email"}
            type={"email"}
            value={handleOnChange}
          />
          <TextField
            setClicked={clickedAdd}
            name="password"
            placeholder={"password"}
            type={"password"}
            value={handleOnChange}
          />
          <p className="text-[10px] mt-1 text-gray-400">
            password must be more than 6 characters
          </p>
          <TextField
            setClicked={clickedAdd}
            name="firstName"
            placeholder={"first Name"}
            type={"text"}
            value={handleOnChange}
          />
          <TextField
            setClicked={clickedAdd}
            name="lastName"
            placeholder={"last name"}
            type={"text"}
            value={handleOnChange}
          />
          <button
            onClick={() => {
              setClickedAdd(true);
              handleAcceptData();
            }}
            className="btn w-full mt-5"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};
