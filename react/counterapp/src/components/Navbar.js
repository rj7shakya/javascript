import React, { Component } from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">
          COUNTER{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
