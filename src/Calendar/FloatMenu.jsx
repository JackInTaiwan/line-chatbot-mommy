import React, { Component } from "react";
import { Animated } from "react-animated-css";
import "./styles.css";



export default class FloatMenu extends Component {
  render() {
    const windowHeight = window.innerHeight;
    console.log("float")

    return(
      <div className="float-menu">
        <div className="float-panel" style={{height: windowHeight}}></div>
        <div className="cateBlock">
          <button className="cateButton">媽媽手冊</button>
          <button className="cateButton">代辦事項</button>
          <button className="cateButton">日記</button>
        </div>
      </div>
    );
  }
}