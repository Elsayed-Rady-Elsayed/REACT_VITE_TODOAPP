import React from "react";

export const TextField = (props) => {
  return (
    <div className="flex flex-col text-white/80 capitalize font-light">
      <label className="mb-2" htmlFor={props.name}>
        {props.placeholder}
      </label>
      <input
        style={{
          boxShadow: "inset 2px 5px 10px rgba(0, 0, 0, 0.3)",
        }}
        id={props.name}
        placeholder={props.placeholder}
        className="bg-[#222630] w-[100%] px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
        name={props.name}
        autoComplete="off"
        type={props.type}
      />
    </div>
  );
};
