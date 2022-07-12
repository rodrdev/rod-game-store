import React, { useState } from "react";
import { IoTrendingUpSharp, IoTrendingDownSharp } from "react-icons/io5";

import "./header.css";
export const Header = () => {
  const deposit = () => {
    return console.log("deposit");
  };
  const finance = [
    {
      title: "WithDraw",
      colors: "green",
      icon: <IoTrendingUpSharp></IoTrendingUpSharp>,
      function: deposit,
    },
    {
      title: "Deposit",
      colors: "grey",
      icon: <IoTrendingDownSharp></IoTrendingDownSharp>,
    },
  ];
  return (
    <>
      <div className="container">
        <div className="boxValue">
          <p className="text-current">Available balance</p>
          <h1>300,000</h1>
        </div>
        <div className="buttons">
          {finance.map((values, i) => (
            <div
              key={i}
              onClick={values.function}
              className={`card ${values.colors}`}
            >
              {values.icon}
              {values.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
