import * as React from "react";
import "./Component6.css";
import Component1 from "./Component1";
const Component6 = (props) => {
  return (
    <div className={`component-6 ${props.className || ""}`}>
      <Component1 className="component-1-instance-1" {...props.component1} />
    </div>
  );
};
export default Component6;
