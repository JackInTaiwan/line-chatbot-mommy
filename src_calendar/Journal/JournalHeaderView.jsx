import React, { Component } from "react"; 
import "./styles.css";



export default class JournalHeaderView extends Component {
  constructor(props){
    super(props);
    this.title = "媽媽手冊";
    this.date = this.props.date;
    this.week = 3;

    this.convertDayToEn = this.convertDayToEn.bind(this);
  }


  convertDayToEn(day) {
    let mapping = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"]
    return mapping[day]
  }


  render() {
    const year = this.date.getFullYear();
    const month = this.date.getMonth() + 1;
    const date = this.date.getDate();
    const day = this.convertDayToEn(this.date.getDay());
    const week = this.week

    return(
      <div className="journal-header-view">
        <div className="header">{this.title}</div> 
        <div className="date">{`${year} /  ${(month + 1)} / ${date} (${day})`}</div>     
        <div className="week">{`第 ${week} 週`}</div>
      </div>
    );
  }
}