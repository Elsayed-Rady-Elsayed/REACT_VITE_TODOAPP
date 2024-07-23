import React, { useEffect, useState } from "react";
import { GetStartedBtn } from "./GetStartedBtn";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useRecoilState } from "recoil";
import { doc, getDoc } from "firebase/firestore";
import { auth, fireStore } from "../firebase/fireBase";
import { fetchUserData } from "../firebase/getUserData";
import { userAtom } from "../recoil/user";
import { TasksAtom } from "../recoil/tasksAtom";
import "../styles/animatedButton.css";
export const Header = (props) => {
  const navigator = useNavigate();
  const [tasks, setTasks] = useRecoilState(TasksAtom);

  fetchUserData();
  const [user, setUser] = useRecoilState(userAtom);
  const LogOut = async () => {
    await auth.signOut();
    setTasks([]);
    setUser({});
    navigator("/REACT_VITE_TODOAPP/home");
  };
  const [isLogineduser, setIsLoginedUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsLoginedUser(user);
    });
  }, []);
  return (
    <>
      <div className="header container m-auto md:p-5 lg:p-5 flex justify-between items-center py-2 px-2 md:px-10 md:py-5">
        <Link to="/REACT_VITE_TODOAPP/">
          <h2
            className={`${
              props.activeTextAnimation ? "animateText" : ""
            } text-white`}
            style={{
              textShadow: props.activeTextAnimation ? "" : "1px 1px 3px white",
            }}
          >
            TODO
          </h2>
        </Link>
        <div className="flex items-center gap-2">
          {isLogineduser ? (
            <button className="BtnLogOut" onClick={LogOut}>
              <div className="sign">
                <svg viewBox="0 0 512 512">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </div>
              <div className="text">Logout</div>
            </button>
          ) : (
            <Link
              to="/REACT_VITE_TODOAPP/home/login"
              className="btn"
              style={{
                textAlign: "center",
                fontSize: "14px",
                padding: "5px 10px",
                height: "fit-content",
                // margin: "0px",
              }}
            >
              Login
            </Link>
          )}
          <a href="https://github.com/Elsayed-Rady-Elsayed">
            <i className="fa-brands fa-github text-gray-600 hover:text-white transition-all"></i>
          </a>
          <a href="https://www.linkedin.com/in/elsayed-rady-elsayed-73b541288/">
            <i className="fa-brands fa-linkedin text-gray-600 hover:text-[#378fe9] transition-all"></i>
          </a>
        </div>
      </div>
    </>
  );
};
