import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Done({ taskList }) {
  const [Done, setDone] = useState([]);

  useEffect(() => {
    setDone(taskList.filter((e) => e.status === true));
  }, [Done]);

  return (
    <div>
      <h1 className="display-1 for-bold">Task Tacker 📑</h1>
      <br />
      <Navbar />
      <br />
      <h3>Done Task</h3>
      <table className="table ">
        <thead className="table-dark">
          <tr>
            <th>S.No</th>
            <th>Time</th>
            <th>Task</th>
          </tr>
        </thead>

        <tbody className="table-light">
          {Done.map((e, i) => (
            <tr key={`DoneKey${i}`}>
              <td>{i + 1}</td>
              <td>{e.taskTime}</td>
              <td>{e.task}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Done;
