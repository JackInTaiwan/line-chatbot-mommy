import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

library.add(
  faCircleNotch,
)


export default class CalendarItemsView extends Component {
	constructor(props) {
		super(props);
		this.extractItems = this.extractItems.bind(this);
	}


	extractItems(data, selectedDate) {
		let extractedItems = [];
		
		data.journal.map((item) => {
			let date = item.date;
			if (date.getYear() == selectedDate.getYear() && date.getMonth() == selectedDate.getMonth() && date.getDate() == selectedDate.getDate()){
				extractedItems.push(item);
			}
		})

		data.reminder.map((item) => {
			let date = item.date;
			if (date.getYear() == selectedDate.getYear() && date.getMonth() == selectedDate.getMonth() && date.getDate() == selectedDate.getDate()){
				extractedItems.push(item);
			}
		})

		data.diary.map((item) => {
			let date = item.date;
			if (date.getYear() == selectedDate.getYear() && date.getMonth() == selectedDate.getMonth() && date.getDate() == selectedDate.getDate()){
				extractedItems.push(item);
			}
		})

		return extractedItems;
	}


	render() {
		const data = this.props.data;
		const selectedDate = this.props.selectedDate;
		const extractedItems = this.extractItems(data, selectedDate)
		console.log(extractedItems);
		return(
			<div className="calendar-items-view">
        {
          extractedItems.map((item) => {
            return(
              <Item key={item.id} item={item}/>
            );
          })
        }
			</div>
		);
	}
}



export class Item extends Component {
  constructor(props) {
    super(props);
    this.item = this.props.item;
    this.cate = this.item.cate
    this.title = this.item.title;
    this.colorMap = {
      "journal": "#f0698acc",
      "reminder": "#4b81be",
      "diary": "#5ac084",
    }
  }
  
  render() {
    const testOnClick = ()=> {
      console.log("use click");
    }

    return(
      <button className="item" onClick={testOnClick}>
        <FontAwesomeIcon 
          icon="circle-notch"
          color={this.colorMap[this.cate]}
          style={{marginLeft: 10}}
        />
        <div className="title-font">{this.title}</div>
      </button>
    );
  }
}