import * as React from "react";
import "./Component1.css";
const Component1 = (props) => {
  return (
    <div className={`component-1 ${props.className || ""}`}>
      <select className="rectangle-4">
        <option className="station">{props.station || "Line"}</option>
      </select>
    </div>
  );
};
export default Component1;
