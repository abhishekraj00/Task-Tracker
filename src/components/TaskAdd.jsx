import React, { useRef, useState } from "react";

import "./Component.css";

function TaskAdd() {
  const currentTime = new Date().toLocaleTimeString();
  const [taskList, setTaskList] = useState([]);
  const addDataRef = useRef(); // for input data access

  const [forEditToggel, setEditToggel] = useState(false); //
  const [getId, setID] = useState("");

  // task add logic
  const handleAdd = (event) => {
    if (addDataRef.current.value) {
      setTaskList([
        ...taskList,
        {
          id: taskList.length + 1,
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
    taskList[getId] = {
      ...taskList[getId],
      task: addDataRef.current.value,
      taskTime: currentTime,
      id: `${+getId + 1} ✏️`,
    };
    setEditToggel(false);
    addDataRef.current.value = "";
  };

  const deleteTask = (event) => {

    let newTaskList =  taskList.filter((e, idk) => event.target.id !== `${idk}`)
    let updateIndex = newTaskList.map((e,i)=>{

       return {...e,id : i+1}
        
    })
    console.log(updateIndex)
    setTaskList(updateIndex);
  };

  return (
    <>
      <h1 className="display-1 for-bold">TO DO APP 📑</h1>
      <br />
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

              <td>{e.id}</td>
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
                  {e.status ? "✅" : "⌛"}
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
