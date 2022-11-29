import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Pending({ taskList }) {
  const [pending, setPending] = useState([]);

  useEffect(() => {
    setPending(taskList.filter((e) => e.status === false));
  }, [pending]);

  return (
    <div>
      <h1 className="display-1 for-bold">Task Tacker 📑</h1>
      <br />
      <Navbar />
      <br />
      <h3>Pending Task</h3>

      <table className="table ">
        <thead className="table-dark">
          <tr>
            <th>S.No</th>
            <th>Time</th>
            <th>Task</th>
          </tr>
        </thead>

        <tbody className="table-light">
          {pending.map((e, i) => (
            <tr key={`PendingKey${i}`}>
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

export default Pending;
