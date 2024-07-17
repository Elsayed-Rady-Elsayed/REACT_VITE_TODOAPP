import React from "react";
import { Link } from "react-router-dom";

export const GetStartedBtn = (props) => {
  return (
    <Link
      to={"/home"}
      className="capitalize bg-white rounded-3xl text-black px-3 py-1 hover:bg-transparent hover:border hover:border-white hover:text-white border border-transparent transition-all"
    >
      {props.title}
    </Link>
  );
};
