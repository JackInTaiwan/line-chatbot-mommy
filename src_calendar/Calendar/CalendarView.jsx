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
    this.addButtonOnClick = this.addButtonOnClick.bind(this);
	}


	onDayClick(day, {selected}) {
		this.props.parentPage.setState((prev) => {
			let newState = prev;
			newState.selectedDate = day;
			return newState;
		})
  }
  

  addButtonOnClick() {
    this.props.parentPage.setState((prev) => {
      let newState = prev;
      newState.floatMenuToggle = ! prev.floatMenuToggle;
      return newState;
    })
  }


	render() {
		const journalStyle = `.DayPicker-Day--journal {
			background-color: #f38ac4;
			height: 20px;
			width: 20px;
			border-radius: 20px;
			color: white;
		}`;
		const reminderStyle = `.DayPicker-Day--reminder {
			background-color: #4b81be;
			height: 20px;
			width: 20px;
			border-radius: 20px;
			color: white;
		}`;
		const diaryStyle = `.DayPicker-Day--diary {
			background-color: #5ac084;
			height: 20px;
			width: 20px;
			border-radius: 20px;
			color: white;
		}`;

		const modifiers = {
			journal: [
				new Date(2018, 7, 15),
				//new Date(2018, 7, 16)
			],
			reminder: [
				new Date(2018, 7, 17),
			],
			diary: [
				new Date(2018, 7, 20)
			],
		};

		const testOnClick = ()=> {
			console.log("use");
		}

		return (
			<div className="calendar-view">
				<style>{journalStyle}</style>
				<style>{reminderStyle}</style>
				<style>{diaryStyle}</style>
				<DayPicker
					showOutsideDays={true}
					modifiers={modifiers}
					onDayClick={this.onDayClick}
				/>
				<button className="add-button" onClick={this.addButtonOnClick}>
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