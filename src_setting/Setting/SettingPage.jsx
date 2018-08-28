import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";




export default class SettingPage extends Component {
	constructor(props) {
    super(props);
  }


  componentWillMount() {
    liff.init(
			data => {
			  console.log("liff init success...");
			},
			error => {
				console.log("liff init fail...");
			}
		);
	}
  


  render() {
    return(
      <div className="setting-page">
        <div className="setting-block">
        <Link to={{pathname:"/add"}} className="save-button">
          <div className="save-underline"></div>
          <div className="save-font-container">
              <button className="save-font">{"新增寶寶資料"}</button>
          </div>
        </Link>
        <Link to={{pathname:"/add"}} className="save-button">
          <div className="save-underline"></div>
          <div className="save-font-container">
              <button className="save-font">{"與伴侶同步"}</button>
          </div>
        </Link>
        </div>
      </div>
    );
  }
}