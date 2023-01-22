import * as React from "react";
import "./Num02Textbox.css";
const Num02Textbox = (props) => {
  return (
    <div className={`num-02-textbox ${props.className || ""}`}>
      <span className="text-box2">{props.textBox || "Stations Near You"}</span>
    </div>
  );
};
export default Num02Textbox;
