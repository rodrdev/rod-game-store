import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { HomePage } from "./views/home/homePage";
import { ModuleBody } from "typescript";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
