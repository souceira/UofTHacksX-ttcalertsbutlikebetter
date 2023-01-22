import * as React from "react";
import "./Textbox1.css";
const Textbox1 = (props) => {
  return (
    <div className={`num-01-textbox ${props.className || ""}`}>
      {props.textBox || "ALWAYS WORKING FOR YOUR SAFETY"}
    </div>
  );
};
export default Textbox1;
