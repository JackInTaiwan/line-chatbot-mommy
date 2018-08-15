import React, { Component } from "react";
import "./styles.css";


export default class FloatMenu extends Component {
  render() {
    const windowHeight = window.innerHeight;

    return(
      <div>
      <div className="float-menu" style={{height: windowHeight}}></div>
      <div className="cateBlock">
        <button className="cateButton">媽媽手冊</button>
        <button className="cateButton">代辦事項</button>
        <button className="cateButton">日記</button>
      </div>
      </div>
    );
  }
}