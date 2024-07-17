import { useEffect, useState } from "react";
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
function App() {
  return (
    <div className="bg-[#121212] h-svh">
      <Header activeTextAnimation />
      <Routes>
        <Route
          path="/REACT_VITE_TODOAPP/"
          element={<OnBoarding activeTextAnimation />}
        />
        <Route path="/REACT_VITE_TODOAPP/home" element={<Home />}>
          <Route path="/REACT_VITE_TODOAPP/home" element={<ShowTasks />} />
          <Route
            path="/REACT_VITE_TODOAPP/home/addTask"
            element={<AddTask />}
          />
        </Route>
      </Routes>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
