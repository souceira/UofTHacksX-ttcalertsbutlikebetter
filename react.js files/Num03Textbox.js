import * as React from "react";
import "./Num03Textbox.css";
const Num03Textbox = (props) => {
  return (
    <div className={`num-03-textbox ${props.className || ""}`}>
      <span className="text-box">{props.textBox || "Share My Location"}</span>
    </div>
  );
};
export default Num03Textbox;
