import React, { useRef, useState } from "react";

import "./Component.css";
import Heading from "./Heading";
import TimerClock from "./TimerClock"; // countDown Component with take value in props and start timer

function TaskAdd({
  currentTime,
  taskList,
  setTaskList,
  addDataRef,
  forEditToggel,
  setEditToggel,
  getId,
  setID,
  setDelete,
  currentDate,
}) {
  const addDataRef2 = useRef();
  const addDataRef3 = useRef();
  let convertTimeInSec;

  const [timeType, setTimeType] = useState("min");
  const [priorityData, setPrority] = useState("High");

  // task add logic
  const handleAdd = (event) => {
    convertTimeInSec = addDataRef2.current.value;

    if (timeType === "hr") {
      convertTimeInSec = convertTimeInSec * 60 * 60;
    } else if (timeType === "min") {
      convertTimeInSec = convertTimeInSec * 60;
    } else if (timeType === "days") {
      convertTimeInSec = convertTimeInSec * 60 * 60 * 24;
    }

    if (
      addDataRef.current.value &&
      addDataRef2.current.value &&
      addDataRef3.current.value
    ) {
      setTaskList([
        ...taskList,
        {
          id: "📝",
          task: addDataRef.current.value,
          taskTime: currentTime,
          style: {},
          cName: "",
          edit: false,
          delete: false,
          status: false,
          getTaskTime: `${addDataRef2.current.value}${timeType}`,
          priority: addDataRef3.current.value,
          clockTimer: convertTimeInSec,
          timeType: timeType,
          startTime: currentTime,
          startDay: currentDate,
          doneDay: "",
          doneTime: "⌛",
          
        },
      ]);
      addDataRef.current.value = "";
      addDataRef2.current.value = "";
      addDataRef3.current.value = "";
    } else if (!addDataRef.current.value) {
      alert("Task Box Can't be empty");
    } else if (!addDataRef2.current.value) {
      alert("Please assign Task duration");
    } else if (!addDataRef3.current.value) {
      alert("Please Select Priority");
    }
  };

  // function for Edit button

  const handelEdit = (event) => {
    addDataRef.current.focus();
    addDataRef.current.value = taskList[event.target.id].task;
    addDataRef2.current.value = taskList[event.target.id].getTaskTime;
    addDataRef3.current.value = taskList[event.target.id].priority;
    setEditToggel(true);
    setID(event.target.id);
  };

  // when edit get call this function take place at add Task
  const handelEditAdd = (event) => {
    convertTimeInSec = addDataRef2.current.value;

    if (timeType === "hr") {
      convertTimeInSec = convertTimeInSec * 60 * 60;
    } else if (timeType === "min") {
      convertTimeInSec = convertTimeInSec * 60;
    } else if (timeType === "days") {
      convertTimeInSec = convertTimeInSec * 60 * 60 * 24;
    }

    taskList[getId] = {
      ...taskList[getId],
      task: addDataRef.current.value,
      taskTime: currentTime,
      id: `✏️`,
      getTaskTime: `${addDataRef2.current.value}${timeType}`,
      priority: addDataRef3.current.value,
      clockTimer: convertTimeInSec,
    };
    setEditToggel(false);
    addDataRef.current.value = "";
    addDataRef2.current.value = "";
    addDataRef3.current.value = "";
  };

  const handelDone = (e) => {
    taskList[e.target.id] = {
      ...taskList[e.target.id],
      style: { textDecoration: "line-through" },
      edit: true,
      status: true,
      cName: "table-success",
      doneDay: currentDate,
      doneTime: currentTime,
    };
    setTaskList([...taskList]);
  };

  const deleteTask = (event) => {

    let newTaskList = taskList.filter((e, idk) => event.target.id !== `${idk}`);

    setDelete(taskList.filter((e, idk) => event.target.id === `${idk}`));

    setTaskList([...newTaskList]);
  };

  return (
    <>
      <Heading />

      <form>
        {/* ---- Second Input for task timeing ---------- */}

        {/* ---- getTaskTime  input-box  in housr ---------- */}

        <div className="task-second-input">
          <div className="input-group mb-3 input-2">
            <input
              type="number"
              className="form-control"
              placeholder="Set Task Duration (seconds)"
              ref={addDataRef2}
            />

            <select
              className="btn btn-dark for-focus"
              type="button"
              id="button-addon2"
              onClick={(e) => setTimeType(e.target.value)}
            >
              <option>min</option>
              <option>sec</option>
              <option>hr</option>
              <option>days</option>
            </select>
          </div>
          <br />
          {/* ---- priority  Higher Middle low---------- */}
          <div className="input-group mb-3 input-3">
            <input
              disabled={true}
              type="text"
              className="form-control"
              placeholder=" Select Task Priority"
              ref={addDataRef3}
              value={priorityData}
            />
            <select
              className="btn btn-dark for-focus"
              type="button"
              id="button-addon2"
              onClick={(e) => setPrority(e.target.value)}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <br />
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add New Task"
            ref={addDataRef}
          />
          <button
            className="btn btn-dark for-focus"
            type="button"
            id="button-addon2"
            onClick={forEditToggel ? handelEditAdd : handleAdd}
          >
            {forEditToggel ? "✏️" : "Add Task"}
          </button>
        </div>
        <br />
      </form>

      {/* -------------- */}

      <table className="table ">
        <thead className="table-dark">
          <tr>
            <th>S.No</th>
            <th>Day</th>
            <th>Time</th>
            <th>Task</th>
            <th>Priority</th>
            <th className="timer-box">Time Limit</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody className="table-light">
          {taskList.map((e, i) => (
            <tr className={e.cName} key={`keyLi${i}`} style={e.style}>
              {/* All Task list Button */}
              <td>{i + 1}</td>
              <td>{e.startDay}</td>
              <td>{e.startTime}</td>
              <td style={{ maxWidth: "300px", overflowWrap: "break-word" }}>
                {e.task}
              </td>
              <td>{e.priority}</td>

              <td>
                <div className="timer-box">
                  {e.getTaskTime}
                  {e.cName ? "" : <TimerClock clock={e.clockTimer} />}
                </div>
              </td>

              {/* timer funcation */}
              {/* Done Button */}
              <td>
                <button
                  className="btn btn-outline-success for-boder"
                  disabled={e.status}
                  id={i}
                  onClick={handelDone}
                >
                  {e.status ? "✅😃" : "⌛"}
                </button>
              </td>
              {/* Edit Button */}
              <td>
                <button
                  className="btn btn-outline-warning for-boder"
                  disabled={e.edit}
                  id={i}
                  onClick={handelEdit}
                >
                  ✏️
                </button>
              </td>
              {/* Delete Button */}
              <td>
                <button
                  className="btn btn-outline-danger for-boder"
                  key={`key${i}`}
                  id={i}
                  onClick={deleteTask}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TaskAdd;
