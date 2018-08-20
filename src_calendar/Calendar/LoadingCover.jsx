import React, { Component } from "react";
import "./styles.css";



export default class LoadingCover extends Component {
  render() {
    const windowHeight = window.innerHeight;

    return(
      <div className="loading-cover">
        <div className="float-panel" style={{height: windowHeight}}></div>
        <div className="loading-block">
          {"Loading"}
        </div>
      </div>
    );
  }
}