import * as React from "react";
import "./Home.css";
import batteryEnd from "../images/batteryEnd.png";
import light from "../images/light.png";
import wifi from "../images/wifi.png";
import signal from "../images/signal.png";
import ttcLogo from "../images/ttcLogo.png";
import Textbox1 from "../components/Textbox1";
import Num18MobileAppHea from "../components/Num18MobileAppHea";
const Home = () => {
    const propsData = {
      num18MobileAppHea: {
        yourTextHere: "",
        wifi: wifi,
        signal: signal,
        time: "00:00",
        batteryEnd: batteryEnd,
      },
      num01Textbox: {
        textBox: "ALWAYS WORKING FOR YOUR SAFETY",
      },
    };
    return (
      <div className="export-to-code-error">
        <Num18MobileAppHea
          className="num-18-mobile-app-hea-instance-1"
          {...propsData.num18MobileAppHea}
        />
        <img className="ttc-logo" src={ttcLogo} />
        <Textbox1
          className="num-01-textbox-instance-1"
          {...propsData.num01Textbox}
        />
        <span className="ttc-auto-alert">TTC ALERT "But, Like, Better"</span>
        <img className="light" src={light} />
      </div>
    );
}

export default Home;
