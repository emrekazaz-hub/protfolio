import React, { forwardRef } from "react";
import video from "../Video/preview-420578-lh4fg3eD1g-high.mp4";
import video2 from "../Video/CLOTH-TEST4.mp4";
import "./Video.css";

const Video = forwardRef((props, ref) => {
  return (
    <div id="toHome" className="video-container">
      <video ref={ref} autoPlay loop muted>
        <source src={video2} type="video/mp4" />
      </video>
      <div className="content">
        <h2 style={{fontSize: "96px"}}>Welcome to My Protfolio</h2>
      </div>
    </div>
  );
});

export default Video;
