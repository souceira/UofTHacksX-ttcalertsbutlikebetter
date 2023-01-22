import * as React from "react";
import "./Private.css";
import num360F103953531J from "../images/num360F103953531J.png";
import vector from "../images/vector.png";
import Component8 from "../components/Component8";
import Component6 from "../components/Component6";

const Private = () => {
  const propsData = {
    component6: {
      component1: {
        vector: vector,
        station: "Line",
      },
    },
    component8: {
      shareMyLocation: "Share My Location",
    },
  };
  return (
    <div className="page-2">
      <span className="select-the-line">Select the line</span>
      <div className="flex-container">
        <Component6
          className="component-6-instance-1"
          {...propsData.component6}
        />
        <hr className="line-1" />
        <div className="frame-21">
          <button className="rectangle-6">
            <span className="alert-type">Alert Type</span>
          </button>
        </div>
        <button className="rectangle-7">Post</button>
        <button className="rectangle-5">Station</button>
        <img className="num-360-f-103953531-j" src={num360F103953531J} />
        <span className="assailant-with-weapo">Assailant with weapon</span>
        <hr className="line-3" />
        <img className="num-360-f-103953531-j-1" src={num360F103953531J} />
        <span className="assailant-with-weapo-1">Assailant with weapon</span>
      </div>
      <hr className="line-4" />
      <div className="flex-container-1">
        <span className="lawrence">Lawrence</span>
        <span className="fight-broke-out">Fight broke out</span>
        <img className="num-360-f-103953531-j-2" src={num360F103953531J} />
      </div>
      <hr className="line-5" />
      <div className="flex-container-2">
        <span className="queen">Queen</span>
        <span className="assailant-with-weapo-2">Assailant with weapon</span>
        <img className="num-360-f-103953531-j-3" src={num360F103953531J} />
      </div>
      <hr className="line-6" />
      <div className="flex-container-3">
        <span className="yorkdale">Yorkdale</span>
        <span className="armed-officers-prese">Armed officers present</span>
        <img className="num-360-f-103953531-j-4" src={num360F103953531J} />
      </div>
      <hr className="line-7" />
      <div className="flex-container-4">
        <span className="queens-park">Queen’s Park</span>
        <span className="trespasser-on-tracks">Trespasser on tracks</span>
        <img className="num-360-f-103953531-j-5" src={num360F103953531J} />
      </div>
      <hr className="line-8" />
      <div className="flex-container-5">
        <span className="queen-1">Queen</span>
        <span className="assailant-with-weapo-3">Assailant with weapon</span>
        <img className="num-360-f-103953531-j-6" src={num360F103953531J} />
      </div>
      <hr className="line-9" />
      <div className="flex-container-6">
        <span>Lawrence</span>
        <span className="fight-broke-out-1">Fight broke out</span>
        <img className="num-360-f-103953531-j-7" src={num360F103953531J} />
      </div>
      <hr className="line-10" />
      <span className="num-1-5">&lt; 1 &#x2F; 5 &gt;</span>
      <Component8
        className="component-8-instance-1"
        {...propsData.component8}
      />
    </div>
  );
};

export default Private;
