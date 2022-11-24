import React, { useRef, useState } from "react";

import "./Component.css";

function TaskAdd() {
  const currentTime = new Date().toLocaleTimeString();
  const [taskList, setTaskList] = useState([]);
  const addDataRef = useRef(); // for input data access

  const [forEditToggel, setEditToggel] = useState(false); //
  const [getId, setID] = useState("");

  // task add logic
  const handleAdd = () => {
    console.log(taskList);
    if (addDataRef.current.value) {
      setTaskList([
        ...taskList,
        {
          task: addDataRef.current.value,
          taskTime: currentTime,
          style: {},
          cName: "",
          edit: false,
          delete: false,
          status: false,
        },
      ]);
      addDataRef.current.value = "";
    } else {
      alert("Task Box Can't be empty");
      return;
    }
  };

  // function for Edit button

  const handelEdit = (event) => {
    addDataRef.current.focus();
    addDataRef.current.value = taskList[event.target.id].task;
    setEditToggel(true);
    setID(event.target.id);
  };

  // when edit get call this function take place at add Task
  const handelEditAdd = (event) => {
    taskList[getId] = { ...taskList[getId], task: addDataRef.current.value };
    setEditToggel(false);
    addDataRef.current.value = "";
  };

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add New Task"
          ref={addDataRef}
        />
        <button
          className="btn btn-dark"
          type="button"
          id="button-addon2"
          onClick={forEditToggel ? handelEditAdd : handleAdd}
        >
          {forEditToggel ? "✏️" : "+"}
        </button>
      </div>

      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>S.No</th>
            <th>Time</th>
            <th>Task</th>

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
              <td>{e.taskTime}</td>
              <td>{e.task}</td>

              {/* Done Button */}

              <td>
                <button
                  className="btn btn-outline-success for-boder"
                  disabled={e.status}
                  id={i}
                  onClick={(e) => {
                    taskList[e.target.id] = {
                      ...taskList[e.target.id],
                      style: { textDecoration: "line-through" },
                      edit: true,
                      status: true,
                      cName: "table-success",
                    };
                    setTaskList([...taskList]);
                  }}
                >
                  {e.status ? '✅' : '⌛'}
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
                  onClick={(event) =>
                    setTaskList(
                      taskList.filter((e, id) => event.target.id != id)
                    )
                  }
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
