import React from "react";
import { GetStartedBtn } from "./GetStartedBtn";

export const OnBoarding = (props) => {
  return (
    <div
      className="onBoarding absolute left-1/2 top-1/2 p-5 text-center"
      style={{
        transform: "translate(-50%,-50%)",
      }}
    >
      <h1
        className={`text-white mb-4 py-2 ${
          props.activeTextAnimation ? "animateText-lg" : ""
        } text-4xl capitalize`}
        style={{}}
      >
        start doing your tasks
      </h1>
      <GetStartedBtn title={"get started"} />
    </div>
  );
};
