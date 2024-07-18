import React, { useRef } from "react";

export const AuthAlert = (props) => {
  const warningRef = useRef();

  return (
    <div
      className={`alert ${props.color} text-white flex items-center p-1 text-sm w-full`}
      id="warningItem"
      ref={warningRef}
    >
      {props.title}
    </div>
  );
};
