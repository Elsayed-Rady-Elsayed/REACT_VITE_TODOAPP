import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route, Router } from "react-router-dom";
import { app } from "./firebase/fireBase";
import { getDatabase, ref, set, push, get, remove } from "firebase/database";
import { Header } from "./components/Header";
import { OnBoarding } from "./components/OnBoarding";
import { Home } from "./pages/Home";
import { AddTask } from "./components/AddTask";
import { ShowTasks } from "./components/ShowTasks";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { EditTask } from "./components/EditTask";
import { fetchUserTasks } from "./firebase/getTasks";
import { Timer } from "./components/Timer";
function App() {
  fetchUserTasks();
  const [content, setContent] = useState(
    <div className="loader">
      <div className="square" id="sq1"></div>
      <div className="square" id="sq2"></div>
      <div className="square" id="sq3"></div>
      <div className="square" id="sq4"></div>
      <div className="square" id="sq5"></div>
      <div className="square" id="sq6"></div>
      <div className="square" id="sq7"></div>
      <div className="square" id="sq8"></div>
      <div className="square" id="sq9"></div>
    </div>
  );

  setTimeout(() => {
    setContent(
      <>
        <Header activeTextAnimation />
        <Routes>
          <Route path="/" element={<OnBoarding activeTextAnimation />} />
          <Route path="/home" element={<Home />}>
            <Route path="/home/login" element={<Login />} />
            <Route path="/home/register" element={<Register />} />
            <Route path="/home" element={<ShowTasks />} />
            <Route path="/home/timer/:id" element={<Timer />} />
            <Route path="/home/addTask" element={<AddTask />} />
            <Route path="/home/eidtTask/:id" element={<EditTask />} />
          </Route>
        </Routes>
      </>
    );
  }, 2000);
  return <div className="bg-[#121212] h-svh">{content}</div>;
}

export default App;
