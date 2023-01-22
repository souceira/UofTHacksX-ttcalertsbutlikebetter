import * as React from "react";
import "./Component8.css";
const Component8 = (props) => {
  return (
    <div className={`component-8 ${props.className || ""}`}>
      <span className="share-my-location">
        {props.shareMyLocation || "Share My Location"}
      </span>
    </div>
  );
};
export default Component8;
