import React, { useRef } from "react";

export const Alert = (props) => {
  const warningRef = useRef();

  return (
    <div
      className="alert bg-yellow-500 text-white flex items-center p-1 text-sm w-full"
      id="warningItem"
      ref={warningRef}
    >
      <i className="fa-solid fa-circle-exclamation me-2"></i>
      <span className="capitalize text-[8px] md:text-[12px]">
        you have't logined you can't save your data
      </span>
      <span
        onClick={() => {
          warningRef.current.style.display = "none";
        }}
        className="cursor-pointer ms-1 inline-block text-[8px] md:text-[12px] underline font-bold"
      >
        i know
      </span>
    </div>
  );
};
