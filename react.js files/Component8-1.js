import * as React from "react";
import "./Component8.css";
const Component8 = (props) => {
  return (
    <button className={`component-8 ${props.className || ""}`}>
      <span className="share-my-location">
        {props.shareMyLocation || "Search By Lines"}
      </span>
    </button>
  );
};
export default Component8;
