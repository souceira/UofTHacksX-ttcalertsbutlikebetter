import * as React from "react";
import "./Public.css";
import num03CloseIcon from "../images/num03CloseIcon.png";
import map from "../images/MAP.png";
import num10Toggle from "../images/num10Toggle.png";
import num16SearchIcon from "../images/num16SearchIcon.png";
import Component81 from "../components/Component8-1";
import Num09InputField from "../components/Num09InputField";
import Num03Textbox from "../components/Num03Textbox";

const Public = () => {
  const propsData = {
    num09InputField: {
      num16SearchIcon: num16SearchIcon,
      yourTextHere: "Your Location",
      num03CloseIcon: num03CloseIcon,
    },
    num03Textbox: {
      textBox: "Share My Location",
    },
    component8: {
      shareMyLocation: "Search By Lines",
    },
  };
  return (
    <div className="page-2-1">
      <img className="map" src={map} />
      <Num09InputField
        className="num-09-input-field-instance-1"
        {...propsData.num09InputField}
      />
      <div className="flex-container">
        <Num03Textbox
          className="num-01-textbox-instance-1"
          {...propsData.num03Textbox}
        />
        <img className="num-10-toggle" src={num10Toggle} />
      </div>
      <Component81
        className="component-8-instance-1"
        {...propsData.component8}
      />
    </div>
  );
};

export default Public;
