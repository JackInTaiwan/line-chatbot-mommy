import React, { Component } from "react";
import DayPicker from "react-day-picker";

import CalendarItemsView from "./CalendarItemsView";
import CalendarView from "./CalendarView";
import FloatMenu from	"./FloatMenu";

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
				reminder: [
					{
						id:2,
						cate: "journal",
						date: new Date(),
						title: "test2",
					},
				],
				diary: [
					{
						id:3,
						cate: "diary",
						date: new Date(),
						title: "test3",
					}
				],
			},
			selectedDate: new Date(),
			floatMenuToggle: false,
		}
	}
	


	render() {
		console.log(window.innerHeight)
		return (
			<div className="calendar-page">
				<CalendarView parentPage={this} />
				<CalendarItemsView data={this.state.data} selectedDate={this.state.selectedDate} />
				{this.state.floatMenuToggle ? <FloatMenu /> : null }
			</div>
    );
	}

}



