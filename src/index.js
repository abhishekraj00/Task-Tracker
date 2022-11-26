import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TaskAdd from "./components/TaskAdd";
import AllTask from "./components/DeletTask";
import Done from "./components/Done";
import Pending from "./components/Pending";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <App/>
  </React.StrictMode>
);
