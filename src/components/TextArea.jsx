import React from "react";

export const TextArea = (props) => {
  return (
    <div className="flex flex-col text-white/80 capitalize font-light">
      <label className="mb-2" htmlFor={props.name}>
        {props.placeholder}
      </label>
      <textarea
        rows="5"
        name={props.name}
        autoComplete="off"
        placeholder={props.placeholder}
        id={props.name}
        style={{
          boxShadow: "inset 2px 5px 10px rgba(0, 0, 0, 0.3)",
        }}
        className="bg-[#222630] w-full px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
      ></textarea>
    </div>
  );
};
