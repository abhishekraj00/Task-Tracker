import React, { useRef, useState } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import TaskAdd from "./components/TaskAdd";
import Done from "./components/Done";
import Pending from "./components/Pending";
import DeletTask from "./components/DeletTask";

function App() {
  const currentTime = new Date().toLocaleTimeString();
  const [taskList, setTaskList] = useState([]);
  const addDataRef = useRef(); // for input data access

  const [forEditToggel, setEditToggel] = useState(false); //
  const [getId, setID] = useState("");

  const [deleteTt, setDelete] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <TaskAdd
            currentTime={currentTime}
            taskList={taskList}
            setTaskList={setTaskList}
            addDataRef={addDataRef}
            forEditToggel={forEditToggel}
            setEditToggel={setEditToggel}
            getId={getId}
            setID={setID}
            deleteTt={deleteTt}
            setDelete={setDelete}
          />
        </div>
      ),
    },
    {
      path: "/alltask",
      element: <DeletTask deleteTt={deleteTt} />,
    },
    {
      path: "/Done",
      element: <Done taskList={taskList} />,
    },
    {
      path: "/Pending",
      element: <Pending taskList={taskList} />,
    },
  ]);

  return (
    <div className="Main-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
