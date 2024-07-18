import React from "react";
export const TaskCard = (props) => {
  return (
    <div className="overflow-hidden cursor-pointer container m-auto p-2 bg-[#222630] w-[100%] px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid hover:border-[#596A95] border-[#2B3040]">
      <h2 className="cursor-pointer capitalize text-2xl">{props.title}</h2>
      <p className="text-gray-500 text-[12px]">{props.date}</p>
      <div className="flex gap-5">
        <div className="capitalize text-white text-[12px]">
          <p>start : {props.start}</p>
        </div>
        <div className="capitalize text-white text-[12px]">
          <p>end : {props.end}</p>
        </div>
      </div>
      <p className="text-[10px] mt-2 text-gray-400 truncate h-7">
        {props.desciption}
      </p>
    </div>
  );
};
