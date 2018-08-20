import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";




export default class SettingPage extends Component {
	constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className="setting-page">
        <div className="setting-block">
          <div className="save-button">
            <div className="save-underline"></div>
            <div className="save-font-container">
              <Link to={{pathname:"/add"}}>
                <button className="save-font">{"新增"}</button>
              </Link>
            </div>
          </div>
          <div className="save-button">
            <div className="save-underline"></div>
            <div className="save-font-container">
              <Link to={{pathname: "/sync"}}>
                <button className="save-font">{"同步"}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}