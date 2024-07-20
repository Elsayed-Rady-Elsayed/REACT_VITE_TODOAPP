import React, { useState, useEffect } from "react";
import { TextField } from "./TextField";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireStore } from "../firebase/fireBase";
import { AuthAlert } from "./AuthAlert";
import { useRecoilState } from "recoil";
import { userAtom } from "../recoil/user";
import { doc, getDoc } from "firebase/firestore";
export const Login = () => {
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
  });
  const handleAcceptData = () => {
    if (UserData.email.length > 0 && UserData.password.length > 6) {
      setAcceptData(true);
    } else {
      setAcceptData(false);
    }
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (acceptData && clickedAdd) {
      try {
        await signInWithEmailAndPassword(
          auth,
          UserData.email,
          UserData.password
        );
        const user = auth.currentUser;

        setAlertData({
          color: "bg-green-500",
          title: "logined succesfully",
        });

        setTimeout(() => {
          navigator("/home");
        }, 500);
      } catch (e) {
        setAlertData({
          color: "bg-red-500",
          title: "email or password is wrong",
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
          <h2 className="font-semibold text-xl text-center mb-4">Login</h2>
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
          <button
            onClick={() => {
              setClickedAdd(true);
              handleAcceptData();
            }}
            className="btn w-full mt-5"
          >
            Login
          </button>
          <p className="text-center my-2 text-sm">
            don't have an account?
            <Link
              to="/REACT_VITE_TODOAPP/home/register"
              className="underline cursor-pointer font-bold"
            >
              {" "}
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};
