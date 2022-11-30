import React from "react";
import Navbar from "./navbarCom/Navbar";

function Heading() {
  return (
    <>
      <h1 className="display-1 for-bold">Task Tacker 📑</h1>
      <p style={{marginLeft:"15px"}}>With Ease, Track Your Daily Tasks</p>
      <Navbar/>
      <br />
    </>
  );
}

export default Heading;
