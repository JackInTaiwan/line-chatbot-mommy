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
						title: "第一次產檢",
					}
				],
				reminder: [
					{
						id:2,
						cate: "reminder",
						date: new Date(),
						title: "和爸爸一起去吃情人節",
					},
				],
				diary: [
					{
						id:3,
						cate: "diary",
						date: new Date(),
						title: "Suck day with ex-boyfriend",
					},
					{
						id:4,
						cate: "diary",
						date: new Date(2018, 7, 4),
						title: "Marco said he loves me.",
					},
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
				<CalendarView parentPage={this} data={this.state.data} selectedDate={this.state.selectedDate} />
				<CalendarItemsView data={this.state.data} selectedDate={this.state.selectedDate} />
				{this.state.floatMenuToggle ? <FloatMenu selectedDate={this.state.selectedDate}/> : null }
			</div>
    );
	}

}



