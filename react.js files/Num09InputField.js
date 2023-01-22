import * as React from "react";
import "./Num09InputField.css";
const Num09InputField = (props) => {
  return (
    <input
      className={`num-09-input-field ${props.className || ""}`}
      placeholder={props.yourTextHere || "Your Location"}
      type="text"
    />
  );
};
export default Num09InputField;
