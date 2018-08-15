import React, { Component } from "react";
import DayPicker from "react-day-picker";

import CalendarItemsView from "./CalendarItemsView";
import CalendarView from "./CalendarView";

import "react-day-picker/lib/style.css";
import "./styles.css";



export default class CalendarPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				journal: [
					{
						id:0,
						cate: "journal",
						date: new Date(),
						title: "test",
					}
				],
				reminder: [],
				diary: [],
			},
			selectedDate: new Date(),
		}
	}
	


	render() {
		console.log(this.state);
		return (
				<div className="calendar-page">
					<CalendarView parentPage={this} />
					<CalendarItemsView data={this.state.data} selectedDate={this.state.selectedDate} />
				</div>
    );
	}

}



