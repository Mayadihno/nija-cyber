import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <React.Fragment>
      <div className="bannerBackground">
        <div className="banner__text">
          <h1>END HUNGER!</h1>
          <h4>
            Millions of families in AFRICA go hungry every day. Help us provide
            them with enough to eat.
          </h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
