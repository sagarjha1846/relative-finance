import React from "react";
import logo from "../asset/Logo-Light.svg";
import box from "../asset/images/box-large.png";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Relative Logo" />
      </div>
      <div className="big-logo">
        <img src={box} alt="Relative Logo" />
      </div>
    </div>
  );
}

export default Sidebar;
