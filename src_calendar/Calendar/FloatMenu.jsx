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
            <button className="cateButton">媽媽手冊</button>
          </Link>
          <Link to="/reminder" className="route-link">
            <button className="cateButton">代辦事項</button>
          </Link>
          <Link to="/diary" className="route-link">
            <button className="cateButton">日記</button>
          </Link>
        </div>
      </div>
    );
  }
}