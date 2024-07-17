import React, { useRef, useState } from "react";

export const TextField = (props) => {
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
      <input
        ref={inputRef}
        style={{
          boxShadow: "inset 2px 5px 10px rgba(0, 0, 0, 0.3)",
        }}
        id={props.name}
        placeholder={props.placeholder}
        className="bg-[#222630] w-[100%] px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
        name={props.name}
        autoComplete="off"
        type={props.type}
        value={val}
        onChange={(evt) => {
          if (evt.target.value === "") {
            focusInput("red");
          }
          if (props.name == "title") {
            if (evt.target.value.trim() === "") {
              focusInput("red");
            }
          }
          setVal(evt.target.value);
          if (evt.target.value.trim().length > 0) {
            props.value(evt);
          }
        }}
      />
    </div>
  );
};
