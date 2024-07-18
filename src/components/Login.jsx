import React, { useState } from "react";
import { TextField } from "./TextField";
import { Link, useNavigate } from "react-router-dom";
export const Login = () => {
  const navigator = useNavigate();
  const [acceptData, setAcceptData] = useState(false);
  const [clickedAdd, setClickedAdd] = useState(false);
  const [UserData, setUserata] = useState({
    email: "",
    password: "",
  });
  const handleAcceptData = () => {
    if (UserData.email.length > 0 && UserData.password.length > 6) {
      setAcceptData(true);
      setTaskAtomStored((prev) => {
        return [...prev, TaskData];
      });
      //   navigator("/REACT_VITE_TODOAPP/home");
    } else {
      setAcceptData(false);
    }
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  const handleOnChange = (evt) => {
    const { name, value } = evt.target;
    setTaskData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
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
            register
          </Link>
        </p>
      </form>
    </div>
  );
};
