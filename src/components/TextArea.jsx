import React from "react";
import { useRef, useState } from "react";

export const TextArea = (props) => {
  const inputRef = useRef(0);
  const [val, setVal] = useState("");
  const focusInput = (color) => {
    inputRef.current.style.borderColor = color;
  };
  if (props.setClicked && val == "") {
    focusInput("red");
  } else if (props.setClicked && val.length > 0) {
    focusInput("#596A95");
  }
  return (
    <div className="flex flex-col text-white/80 capitalize font-light">
      <label className="mb-2" htmlFor={props.name}>
        {props.placeholder}
      </label>
      <textarea
        ref={inputRef}
        value={val}
        rows="5"
        name={props.name}
        autoComplete="off"
        placeholder={props.placeholder}
        id={props.name}
        style={{
          resize: "none",
          boxShadow: "inset 2px 5px 10px rgba(0, 0, 0, 0.3)",
        }}
        onChange={(evt) => {
          if (evt.target.value.trim() === "") {
            focusInput("red");
          } else {
            focusInput("#596A95");
          }
          setVal(evt.target.value);
          props.value(evt);
        }}
        className="bg-[#222630] w-full px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
      ></textarea>
    </div>
  );
};
