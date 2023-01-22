import * as React from "react";
import "./Alert.css";
import num360F103953531J from "../images/num360F103953531J.png";
import arrow5 from "../images/arrow5.png";
import Num02Textbox from "../components/Num02Textbox";

const Alert = () => {
  const propsData = {
    num01Textbox: {
      textBox: "Stations Near You",
    },
    num01Textbox1: {
      textBox: "<Osgoode>",
    },
    num01Textbox2: {
      textBox: "<Queen>",
    },
  };
  return (
    <div className="page-3">
      <Num02Textbox
        className="num-01-textbox-instance-1"
        {...propsData.num01Textbox}
      />
      <Num02Textbox
        className="num-01-textbox-1-instance"
        {...propsData.num01Textbox1}
      />
      <button className="rectangle-8">Safe</button>
      <Num02Textbox
        className="num-01-textbox-2-instance"
        {...propsData.num01Textbox2}
      />
      <button className="rectangle-11">
        <span className="assailant-with-weapo">Assailant with weapon</span>
        <img className="num-360-f-103953531-j" src={num360F103953531J} />
      </button>
      <span className="st-patrick">&lt;St Patrick&gt;</span>
      <button className="rectangle-9">Safe</button>
      <span className="dundas">&lt;Dundas&gt;</span>
      <button className="rectangle-10">Safe</button>
      <img className="arrow-5" src={arrow5} />
    </div>
  );
};

export default Alert;
