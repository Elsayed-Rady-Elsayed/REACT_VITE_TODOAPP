import React, { useEffect, useState } from "react";
import { GetStartedBtn } from "./GetStartedBtn";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

export const Header = (props) => {
  const cookie = new Cookies();
  return (
    <>
      <div className="header container m-auto md:p-5 lg:p-5 flex justify-between items-center px-10 py-5">
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
          {cookie.get("isLogined") ? (
            ""
          ) : (
            <Link
              to="/REACT_VITE_TODOAPP/home/login"
              className="btn"
              style={{
                fontSize: "14px",
                padding: "3px",
                height: "fit-content",
              }}
            >
              Login
            </Link>
          )}
          <a href="https://github.com/Elsayed-Rady-Elsayed">
            <i className="fa-brands fa-github text-gray-600 hover:text-white transition-all"></i>
          </a>
          <a
            className="ms-3"
            href="https://www.linkedin.com/in/elsayed-rady-elsayed-73b541288/"
          >
            <i className="fa-brands fa-linkedin text-gray-600 hover:text-[#378fe9] transition-all"></i>
          </a>
        </div>
      </div>
    </>
  );
};
