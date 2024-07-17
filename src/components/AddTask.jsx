import React from "react";
import { TextField } from "./TextField";
import { TextArea } from "./TextArea";
import { BackBtn } from "./BackBtn";
export const AddTask = () => {
  return (
    <form
      className="w-full absolute left-1/2 top-1/2 flex justify-center p-2 md:p-0"
      style={{
        transform: "translate(-50%,-50%)",
      }}
    >
      <div className="grid grid-cols-1 gap-2">
        <BackBtn path={"/home"} />
        <TextField name="title" placeholder={"Title"} type={"text"} />
        <TextField name="date" placeholder={"date"} type={"date"} />
        <div className="time grid grid-cols-2 gap-2 w-full">
          <TextField
            name="startingtime"
            placeholder={"start time"}
            type={"time"}
          />
          <TextField name="endtime" placeholder={"end time"} type={"time"} />{" "}
        </div>
        <TextArea name="description" placeholder={"description"} />
        <button className="bg-white rounded-2xl p-2 transition-all border border-transparent hover:border-white hover:bg-transparent hover:text-white">
          add task
        </button>
      </div>
    </form>
  );
};
