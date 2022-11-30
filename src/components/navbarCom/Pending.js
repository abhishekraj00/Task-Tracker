import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import Navbar from "./Navbar";

function Pending({ taskList }) {
  const [pending, setPending] = useState([]);

  useEffect(() => {
    setPending(taskList.filter((e) => e.status === false));
  }, []);

  return (
    <div>
      <Heading/>
      <h3>Pending Task</h3>

      <table className="table ">
        <thead className="table-dark">
          <tr>
            <th>S.No</th>
            <th>Assign Day</th>
            <th>Assign Time</th>
            <th>Task</th>
          </tr>
        </thead>

        <tbody className="table-light">
          {pending.map((e, i) => (
            <tr key={`PendingKey${i}`}>
              <td>{i + 1}</td>
              <td>{e.startDay}</td>
              <td>{e.startTime}</td>
              <td>{e.task}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pending;
