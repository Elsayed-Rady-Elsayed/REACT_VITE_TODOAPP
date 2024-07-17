import React from "react";
import { Link } from "react-router-dom";

export const BackBtn = (props) => {
  return (
    <Link to={props.path}>
      <i className="fa-solid fa-arrow-left text-white"></i>
      <span className="text-white ms-2">back</span>
    </Link>
  );
};
