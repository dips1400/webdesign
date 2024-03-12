import React from "react";
import "./Container.scss";
import Image1 from "../images/29dc45e5c648ff07000ce1feedef6ad2.jpg";
import Arrow from "../images/right-arrow.png";

const Container = () => {
  return (
    <div className="main-content">
      <div className="hrline">
        <div className="title">
          <h1>Lorem</h1>
          <h3>Subtitle</h3>
        </div>
      </div>
      <div className="picture-content">
        <div className="box1">
          <h3>01</h3>
          <h1 id="heading">Lorem ipsum dolor sit</h1>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
        </div>
        <div className="box2">
          <h3>02</h3>
          <h1 id="heading">Lorem ipsum dolor sit</h1>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
        </div>
        <div className="box3">
          <h3>03</h3>
          <h1 id="heading">Lorem ipsum dolor sit</h1>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
        </div>
      </div>
      <div className="lower-content">
        <div className="left">
          <img
            src={Image1}
            alt="pic"
            style={{
              width: 550,
              height: 350,
              float: "right",
              marginTop: "6rem",
            }}
          />
        </div>
        <div className="right">
          <div className="rightContent">
            <h1>Lorem ipsum </h1>
            <hr className="line" style={{ width: 350, height: 7, background: "#6A45FF" }} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <br></br>
            <br></br>
            <div className="lower">
              <div>
                <h2>Lorem ipsum</h2>
              </div>
              <div className="circle">
                <img
                  src={Arrow}
                  alt="arrow"
                  style={{
                    width: 26,
                    marginTop: "0.5rem",
                    marginLeft: "0.4rem",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lowercontainter2">
        <div className="square-logo">
          <div class="square-top"></div>
          <div class="square-right"></div>
          <div class="square-bottom"></div>
          <div class="square-left"></div>
        </div>
      </div>
    </div>
  );
};

export default Container;
