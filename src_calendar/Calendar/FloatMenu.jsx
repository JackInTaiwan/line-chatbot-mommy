import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./styles.css";



export default class FloatMenu extends Component {
  render() {
    const windowHeight = window.innerHeight;
    console.log("float")

    return(
      <div className="float-menu">
        <div className="float-panel" style={{height: windowHeight}}></div>
        <div className="cateBlock">
          <Link to="/journal">
            <button className="cateButton">媽媽手冊</button>
          </Link>
          <button className="cateButton">代辦事項</button>
          <button className="cateButton">日記</button>
        </div>
      </div>
    );
  }
}