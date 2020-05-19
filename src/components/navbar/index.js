import React from "react";
import "./index.css";
import Counter from "./counter"
const Navbar = () => {
  return (
      <div className="navbar_container">
          <h1>React Keep</h1>
          <Counter count={2}/>
      </div>
  );
}

export default Navbar;