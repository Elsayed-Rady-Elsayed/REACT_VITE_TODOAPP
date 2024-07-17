import React, { useEffect, useState } from "react";
import { TextField } from "../components/TextField";
import { Link, Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container m-auto">
      <Outlet />
    </div>
  );
};
