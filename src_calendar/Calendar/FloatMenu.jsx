import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./styles.css";



export default class FloatMenu extends Component {
  render() {
    const windowHeight = window.innerHeight;
    const selectedDate = this.props.selectedDate;

    return(
      <div className="float-menu">
        <div className="float-panel" style={{height: windowHeight}}></div>
        <div className="cateBlock">
          <Link 
            className="route-link"
            to={{pathname:"/journal", state:{date: selectedDate}}}
          >
            <div className="cate-container">
              <button className="cateButton">媽媽手冊</button>
            </div>
          </Link>
          <Link to="/reminder" className="route-link">
            <div className="cate-container">
              <button className="cateButton">代辦事項</button>
            </div>
          </Link>
          <Link to="/diary" className="route-link">
            <div className="cate-container">
              <button className="cateButton">日記</button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}