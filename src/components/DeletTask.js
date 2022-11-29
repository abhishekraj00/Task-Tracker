import React from "react";
import Navbar from "./Navbar";

function DeletTask({ deleteTt }) {
  return (
    <div>
      <h1 className="display-1 for-bold">Task Tacker 📑</h1>
      <br />
      <Navbar />
      <br />
      <h3>Deleted Task</h3>
      <table className="table ">
        <thead className="table-dark">
          <tr>
            <th>S.No</th>
            <th>Time</th>
            <th>Task</th>
          </tr>
        </thead>

        <tbody className="table-light">
          {deleteTt.map((e, i) => (
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

export default DeletTask;
