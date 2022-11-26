import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const styleSheet = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <nav  class="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark nav-border">
        <div style={styleSheet} class="navbar-nav d-grid gap-2 d-md-flex justify-content-md-end">
          <Link class="nav-link active" aria-current="page" to="/">
            <h4 >🏠</h4>
          </Link>
          <Link class="nav-link active" aria-current="page" to="/Done">
            Done Task
          </Link>
          <Link class="nav-link active" aria-current="page" to="/Pending">
            Pending Task
          </Link>
          <Link class="nav-link active" aria-current="page" to="/alltask">
            Deleted Task
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
