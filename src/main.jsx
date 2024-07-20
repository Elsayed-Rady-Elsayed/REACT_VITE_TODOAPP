import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import { OnBoarding } from "./components/OnBoarding.jsx";
import { Login } from "./components/Login.jsx";
import { Register } from "./components/Register.jsx";
import { ShowTasks } from "./components/ShowTasks.jsx";
import { Timer } from "./components/Timer.jsx";
import { Home } from "./pages/Home.jsx";
import { AddTask } from "./components/AddTask.jsx";
import { EditTask } from "./components/EditTask.jsx";

const router = createBrowserRouter([
  {
    path: "/REACT_VITE_TODOAPP/",
    element: <App />,
    children: [
      {
        path: "/REACT_VITE_TODOAPP/",
        element: <OnBoarding />,
      },
      {
        path: "/REACT_VITE_TODOAPP/home",
        element: <Home />,
        children: [
          {
            path: "/REACT_VITE_TODOAPP/home/login",
            element: <Login />,
          },
          {
            path: "/REACT_VITE_TODOAPP/home/register",
            element: <Register />,
          },

          {
            path: "/REACT_VITE_TODOAPP/home",
            element: <ShowTasks />,
          },

          {
            path: "/REACT_VITE_TODOAPP/home/timer/:id",
            element: <Timer />,
          },
          {
            path: "/REACT_VITE_TODOAPP/home/addTask",
            element: <AddTask />,
          },
          {
            path: "/REACT_VITE_TODOAPP/home/eidtTask/:id",
            element: <EditTask />,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
      {/* <App /> */}
    </RecoilRoot>
  </React.StrictMode>
);
