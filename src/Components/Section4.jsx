import React from "react";
import "./CalendarCSS.css";
import frame from "../assets/images/frame2.png";
import flower3 from "../assets/images/flower3.png";
import ring from "../assets/images/ring.png";
import savethedate from "./Art-Assets/savethedate.gif";

function Section4() {
  return (
    <div className="section4">
      <div className="saveText">
        Save the Date
        <img src={flower3} className="flower3" />
      </div>

    </div>
  );
}

export default Section4;
