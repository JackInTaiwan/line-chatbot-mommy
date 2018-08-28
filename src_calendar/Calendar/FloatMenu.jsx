import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./styles.css";



export default class FloatMenu extends Component {
  render() {
    const windowHeight = window.innerHeight;
    const selectedDate = this.props.selectedDate;
    const userId = this.props.userId;

    return(
      <div className="float-menu">
        <div className="float-panel" style={{height: windowHeight}}></div>
        <div className="cate-block">
          <Link 
            className="route-link"
            to={{pathname:"/journal", state:{date: selectedDate, userId: userId}}}
          >
            <div className="cate-container">
              <button className="cate-button">媽媽手冊</button>
            </div>
          </Link>
          <Link to="/reminder" className="route-link">
            <div className="cate-container">
              <button className="cate-button">待辦事項</button>
            </div>
          </Link>
          <Link to="/diary" className="route-link">
            <div className="cate-container">
              <button className="cate-button">日記</button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}