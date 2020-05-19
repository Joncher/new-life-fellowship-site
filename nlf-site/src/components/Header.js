import React from "react";
import "./Header.css";

import bkgdPic from "../assets/elkbuildingfront.jpg";

function Header() {
  return (
    <div className="Header">
      <img src={bkgdPic} />
    </div>
  );
}

export default Header;
