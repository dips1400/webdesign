import React from "react";
import { Link } from "react-router-dom";
import "./Lowerfooter.scss";
import Facebook from "../images/facebook.png";
import Twitter from "../images/twitter.png";
import Instagram from "../images/instagram.png";
import TikTok from "../images/tiktok.png";

const Lowerfooter = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page1">Page 1</Link>
            </li>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
          </ul>
        </div>
        <div className="linesec">
          <hr style={{ width: 1350 , height: 3, backgroundColor: "#fff"}}></hr>
          <div className="sociallinks">
            <ul>
              <li>
                <Link to="/">
                  <img src={Facebook} alt="logo" height={35}/>
                </Link>
              </li>
              <li>
                <Link to="/page1">
                  <img src={Twitter} alt="logo" height={35}/>
                </Link>
              </li>
              <li>
                <Link to="/page2">
                  <img src={Instagram} alt="logo" height={35}/>
                </Link>
              </li>
              <li>
                <Link to="/page2">
                  <img src={TikTok} alt="logo" height={35}/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="trade-mark">
            @ logo, Inc.
        </div>
      </div>
    </div>
  );
};

export default Lowerfooter;
