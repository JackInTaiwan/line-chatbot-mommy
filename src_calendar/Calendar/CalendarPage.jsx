import React, { Component } from "react";
import CalendarItemsView from "./CalendarItemsView";
import CalendarView from "./CalendarView";
import FloatMenu from	"./FloatMenu";

import "react-day-picker/lib/style.css";
import "./styles.css";

import data from "./data.json"



export default class CalendarPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: data,
			selectedDate: new Date(),
			floatMenuToggle: false,
		}
	}
	

	render() {
		return (
			<div className="calendar-page">
				<CalendarView parentPage={this} data={this.state.data} selectedDate={this.state.selectedDate} />
				<CalendarItemsView data={this.state.data} selectedDate={this.state.selectedDate} />
				{this.state.floatMenuToggle ? <FloatMenu selectedDate={this.state.selectedDate}/> : null }
			</div>
    );
	}
}