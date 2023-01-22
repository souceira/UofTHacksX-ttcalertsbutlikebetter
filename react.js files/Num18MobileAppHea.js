import * as React from "react";
import "./Num18MobileAppHea.css";
import rightSide from "./rightSide.png";
const Num18MobileAppHea = (props) => {
  return (
    <div className={`num-18-mobile-app-hea ${props.className || ""}`}>
      <span className="time">{props.time || "00:00"}</span>
      <img className="right-side" src={rightSide} />
    </div>
  );
};
export default Num18MobileAppHea;
