import React, { Component } from "react";
import DayPicker from "react-day-picker";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import "react-day-picker/lib/style.css";
import "./styles.css";



library.add(
	faPlusCircle,
)



export default class CalendarView extends Component {
	constructor(props) {
		super(props);
		this.onDayClick = this.onDayClick.bind(this);
	}


	onDayClick(day, {selected}) {
		this.props.parentPage.setState((prev) => {
			let newState = prev;
			newState.selectedDate = day;
			return newState;
		})
	}


	render() {
		const birthdayStyle = `.DayPicker-Day--highlighted {
			background-color: orange;
			color: white;
		}`;
		const birthday2Style = `.DayPicker-Day--selec {
			background-color: blue;
			color: white;
		}`;

		const modifiers = {
			highlighted: [
				new Date(2018, 7, 15),
				new Date(2018, 7, 16)
			],
			selec: [
				new Date(2018, 7, 17)
			]
		};

		const testOnClick = ()=> {
			console.log("use");
		}

		return (
			<div className="calendar-view">
				<style>{birthdayStyle}</style>
				<style>{birthday2Style}</style>
				<DayPicker
					showOutsideDays={true}
					todayButton="Go to Today"
					onTodayButtonClick={(day, modifiers) => console.log(day, modifiers)}
					modifiers={modifiers}
					onDayClick={this.onDayClick}
				/>
				<button className="add-button" onClick={testOnClick}>
					<FontAwesomeIcon 
						icon="plus-circle" 
						size="2x"
            color="#dd8888"
					/>
				</button>
			</div>
		);
	}
}